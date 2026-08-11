import { Page } from "playwright";
import { logger } from "../utils/logger";

export interface HeadingMetadata { text: string; level: string }
export interface LinkMetadata { text: string; href: string; internal: boolean }
export interface ButtonMetadata { text: string; type: string }
export interface InputMetadata { name: string; type: string; placeholder: string; label: string; ariaLabel: string }
export interface FormMetadata { id: string; name: string; method: string; action: string; fieldCount: number }
export interface TableMetadata { summary: string; headers: string[]; rowCount: number }
export interface MenuMetadata { text: string; role: string }
export interface CardMetadata { title: string; text: string }
export interface DropdownMetadata { label: string; name: string; optionCount: number }
export interface TextBlockMetadata { snippet: string }

export interface SiteMapPage {
  title: string;
  url: string;
  headings: HeadingMetadata[];
  links: LinkMetadata[];
  buttons: ButtonMetadata[];
  inputs: InputMetadata[];
  forms: FormMetadata[];
  tables: TableMetadata[];
  menus: MenuMetadata[];
  cards: CardMetadata[];
  dropdowns: DropdownMetadata[];
  textBlocks: TextBlockMetadata[];
}

/**
 * Builds a natural reading string for an element by joining its child text nodes and
 * child elements with a single space. Raw `.textContent` concatenates adjacent
 * descendant text with NO separator, so an element like
 * <div class="card"><h3>The</h3><p>Blogs</p></div> produced "TheBlogs" (and
 * "Our best selling plans now<block>with free SIM delivery</block>" produced
 * "nowwith"), which was then baked into generated assertions that could never match
 * the real page text. The final whitespace collapse keeps multi-space runs to one.
 *
 * Trade-off: sibling elements are joined with a space even when the DOM has none
 * (e.g. "1<span>0</span>" becomes "1 0"). This is intentional - it matches how the
 * page renders visually distinct segments and fixes the reported corruption cases;
 * Playwright's name matching normalizes whitespace on both sides of the comparison.
 */
function collectReadableText(el: Element | null | undefined): string {
  if (!el) return "";
  let text = "";
  for (const child of el.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      text += child.textContent ?? "";
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      const tag = (child as Element).tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT" || tag === "TEMPLATE") continue;
      text += " " + collectReadableText(child as Element);
    }
  }
  return text.replace(/\s+/g, " ").trim();
}

export async function analyzePage(page: Page): Promise<SiteMapPage> {
  const url = page.url();

  try {
    await page.waitForLoadState("networkidle", { timeout: 10000 });
  } catch {
    logger.debug("networkidle timeout, continuing anyway");
  }

  // NOTE: the callback passed to page.evaluate is serialized and re-executed in the
  // browser. tsx (esbuild with keepNames) injects `__name(...)` references around any
  // named function declared inside it, which then throws "ReferenceError: __name is
  // not defined" in the page. The callback below therefore only uses anonymous arrows
  // and data literals; collectReadableText is shipped in as a source string and
  // re-created with `new Function`, so no named function ever lives inside the
  // serialized callback body.
  const getTextSrc = collectReadableText.toString();

  const data = await page.evaluate((src) => {
    const getText = new Function("el", src + "; return collectReadableText(el);") as (
      el: Element | null | undefined
    ) => string;

    const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"))
      .map((el) => ({ text: getText(el), level: el.tagName.toLowerCase() }))
      .filter((item) => item.text.length > 0);

    const links = Array.from(document.querySelectorAll("a[href]"))
      .map((el) => ({ text: getText(el), href: (el as HTMLAnchorElement).href }))
      .filter((item) => item.href.length > 0);

    const buttons = Array.from(
      document.querySelectorAll("button, input[type=button], input[type=submit], input[type=reset], [role=button]")
    )
      .map((el) => ({
        text: getText(el) || el.getAttribute("value") || "",
        type: el.getAttribute("type") ?? el.tagName.toLowerCase(),
      }))
      .filter((item) => item.text.trim().length > 0);

    const inputs = Array.from(document.querySelectorAll("input, textarea, select")).map((el) => {
      const tagName = el.tagName.toLowerCase();
      const name = el.getAttribute("name") ?? el.id ?? "";
      const type = el.getAttribute("type") ?? tagName;
      const placeholder = el.getAttribute("placeholder") ?? "";
      const ariaLabel = el.getAttribute("aria-label") ?? "";
      let label = "";
      if (el.id) {
        const labelElement = document.querySelector(`label[for='${el.id}']`);
        if (labelElement) label = getText(labelElement);
      }
      return { name: name.trim(), type: type.trim(), placeholder: placeholder.trim(), label: label.trim(), ariaLabel: ariaLabel.trim() };
    });

    const forms = Array.from(document.querySelectorAll("form")).map((el) => ({
      id: el.id ?? "",
      name: el.getAttribute("name") ?? "",
      method: el.getAttribute("method")?.toUpperCase() ?? "GET",
      action: el.getAttribute("action") ?? "",
      fieldCount: el.querySelectorAll("input, textarea, select, button").length,
    }));

    const tables = Array.from(document.querySelectorAll("table")).map((el) => {
      const headerCells = Array.from(el.querySelectorAll("thead th, tr:first-of-type th, tr:first-of-type td"));
      const headers = headerCells.map((cell) => getText(cell)).filter((value) => value.length > 0);
      const rowCount = el.querySelectorAll("tbody tr").length || el.querySelectorAll("tr").length;
      return { summary: el.getAttribute("summary") ?? "", headers, rowCount };
    });

    const menus = Array.from(document.querySelectorAll("[role=menubar], [role=menu], nav")).map((el) => ({
      text: getText(el),
      role: el.getAttribute("role") ?? el.tagName.toLowerCase(),
    }));

    const cards = Array.from(
      document.querySelectorAll("article, [role=article], [role=region], [class*='card'], [data-card]")
    )
      .map((el) => {
        const titleElement = el.querySelector("h1, h2, h3, h4, h5, h6");
        return { title: getText(titleElement), text: getText(el) };
      })
      .filter((item) => item.text.length > 0);

    const dropdowns = Array.from(document.querySelectorAll("select, [role=combobox]")).map((el) => {
      const labelElement = el.id ? document.querySelector(`label[for='${el.id}']`) : null;
      const label = getText(labelElement) || el.getAttribute("aria-label") || "";
      return { label: label.trim(), name: el.getAttribute("name") ?? el.id ?? "", optionCount: el.tagName.toLowerCase() === "select" ? el.querySelectorAll("option").length : 0 };
    });

    // Pre-filter with cheap textContent so the recursive getText walk only runs on
    // long-content elements (avoids O(n^2) subtree walks over every short span/div).
    const textBlocks = Array.from(document.querySelectorAll("p, li, span, div"))
      .filter((el) => (el.textContent || "").length > 30)
      .map((el) => getText(el))
      .filter((text) => text.length > 30)
      .slice(0, 20)
      .map((snippet) => ({ snippet }));

    return { title: document.title, headings, links, buttons, inputs, forms, tables, menus, cards, dropdowns, textBlocks };
  }, getTextSrc);

  return {
    title: (data.title ?? "").trim(),
    url, headings: data.headings,
    links: data.links.map((link) => ({ text: link.text, href: link.href, internal: false })),
    buttons: data.buttons, inputs: data.inputs, forms: data.forms, tables: data.tables,
    menus: data.menus, cards: data.cards, dropdowns: data.dropdowns, textBlocks: data.textBlocks,
  };
}
