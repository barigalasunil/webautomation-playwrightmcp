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
 * Builds a string that mirrors what Playwright's getByRole name matching sees
 * (the ARIA accessible name), so generated assertions can actually match.
 *
 * Rules (approximating the accessible-name computation):
 *  - Text nodes are appended verbatim; the final whitespace collapse normalizes runs.
 *  - `img` contributes its alt (or aria-label) as a standalone, space-padded token:
 *    <h1><img alt="star"> the <img alt="vi-logo"> blogs</h1> is NAMED
 *    "star the vi-logo blogs" — capturing only the text nodes ("the blogs") can
 *    never match, because getByRole compares against the accessible name.
 *  - Block-level children (block tags, or inline tags styled block via computed
 *    display) are separated with a space, like a rendered box boundary:
 *    <h3>The</h3><p>Blogs</p> reads "The Blogs", not "TheBlogs".
 *  - Inline children (span/b/em/a/…) flow in with NO separator: matching the DOM,
 *    FAQ<span>’s</span> reads "FAQ’s", not the bogus "FAQ ’s" an unconditional
 *    join produced (which broke exact-ish name matching against the live page).
 *
 * Must stay self-contained: it is serialized via .toString() and rebuilt inside
 * page.evaluate with `new Function` (see analyzePage) — helpers live in this body.
 */
export function collectReadableText(el: Element | null | undefined): string {
  const INLINE_TAGS = new Set([
    "SPAN", "B", "I", "EM", "STRONG", "A", "SMALL", "SUP", "SUB", "U", "MARK",
    "ABBR", "CODE", "TIME", "Q", "CITE", "LABEL", "BUTTON", "SELECT", "DATA",
    "KBD", "SAMP", "VAR", "RUBY", "DEL", "INS", "S", "WBR", "PICTURE", "SVG",
  ]);
  if (!el) return "";
  let out = "";
  // NOTE: no named inner functions/arrows here — tsx (esbuild keepNames) would
  // wrap them in __name(...), which leaks into .toString() and throws
  // "__name is not defined" when this source is rebuilt inside page.evaluate.
  for (const child of el.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      out += child.textContent ?? "";
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      const c = child as Element;
      const tag = c.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT" || tag === "TEMPLATE") continue;
      if (tag === "IMG" || tag === "AREA" || c.getAttribute("role") === "img") {
        const alt = (c.getAttribute("alt") ?? c.getAttribute("aria-label") ?? "").replace(/\s+/g, " ").trim();
        if (alt) { if (out && !/\s$/.test(out)) out += " "; out += alt + " "; }
        continue;
      }
      let blockish = !INLINE_TAGS.has(tag);
      if (!blockish) {
        const view = (c.ownerDocument as Document | null)?.defaultView;
        const display = view ? String(view.getComputedStyle(c).display || "inline") : "inline";
        blockish = !display.startsWith("inline");
      }
      if (blockish && out && !/\s$/.test(out)) out += " ";
      out += collectReadableText(c);
      if (blockish) out += " ";
    }
  }
  return out.replace(/\s+/g, " ").trim();
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
