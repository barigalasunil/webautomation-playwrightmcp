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

function normalizeText(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

export async function analyzePage(page: Page): Promise<SiteMapPage> {
  const title = normalizeText(await page.title());
  const url = page.url();

  try {
    await page.waitForLoadState("networkidle", { timeout: 10000 });
  } catch {
    logger.debug("networkidle timeout, continuing anyway");
  }

  const headings = await page.$$eval("h1, h2, h3, h4, h5, h6", (elements) =>
    elements.map((element) => ({ text: element.textContent?.trim() ?? "", level: element.tagName.toLowerCase() })).filter((item) => item.text.length > 0)
  );

  const links = await page.$$eval("a[href]", (elements) =>
    elements.map((element) => ({ text: element.textContent?.trim() ?? "", href: (element as HTMLAnchorElement).href })).filter((item) => item.href.length > 0)
  );

  const buttons = await page.$$eval("button, input[type=button], input[type=submit], input[type=reset], [role=button]", (elements) =>
    elements.map((element) => ({ text: element.textContent?.trim() ?? (element.getAttribute("value") ?? ""), type: element.getAttribute("type") ?? element.tagName.toLowerCase() })).filter((item) => item.text.trim().length > 0)
  );

  const inputs = await page.$$eval("input, textarea, select", (elements) =>
    elements.map((element) => {
      const tagName = element.tagName.toLowerCase();
      const name = element.getAttribute("name") ?? element.id ?? "";
      const type = element.getAttribute("type") ?? tagName;
      const placeholder = element.getAttribute("placeholder") ?? "";
      const ariaLabel = element.getAttribute("aria-label") ?? "";
      let label = "";
      if (element.id) {
        const labelElement = document.querySelector(`label[for='${element.id}']`);
        if (labelElement) label = labelElement.textContent?.trim() ?? "";
      }
      return { name: name.trim(), type: type.trim(), placeholder: placeholder.trim(), label: label.trim(), ariaLabel: ariaLabel.trim() };
    })
  );

  const forms = await page.$$eval("form", (elements) =>
    elements.map((element) => ({ id: element.id ?? "", name: element.getAttribute("name") ?? "", method: element.getAttribute("method")?.toUpperCase() ?? "GET", action: element.getAttribute("action") ?? "", fieldCount: element.querySelectorAll("input, textarea, select, button").length }))
  );

  const tables = await page.$$eval("table", (elements) =>
    elements.map((element) => {
      const headerCells = Array.from(element.querySelectorAll("thead th, tr:first-of-type th, tr:first-of-type td"));
      const headers = headerCells.map((cell) => cell.textContent?.trim() ?? "").filter((value) => value.length > 0);
      const rowCount = element.querySelectorAll("tbody tr").length || element.querySelectorAll("tr").length;
      return { summary: element.getAttribute("summary") ?? "", headers, rowCount };
    })
  );

  const menus = await page.$$eval("[role=menubar], [role=menu], nav", (elements) =>
    elements.map((element) => ({ text: element.textContent?.trim() ?? "", role: element.getAttribute("role") ?? element.tagName.toLowerCase() }))
  );

  const cards = await page.$$eval("article, [role=article], [role=region], [class*='card'], [data-card]", (elements) =>
    elements.map((element) => {
      const titleElement = element.querySelector("h1, h2, h3, h4, h5, h6");
      return { title: titleElement?.textContent?.trim() ?? "", text: element.textContent?.trim() ?? "" };
    }).filter((item) => item.text.length > 0)
  );

  const dropdowns = await page.$$eval("select, [role=combobox]", (elements) =>
    elements.map((element) => {
      const labelElement = element.id ? document.querySelector(`label[for='${element.id}']`) : null;
      const label = labelElement?.textContent?.trim() ?? element.getAttribute("aria-label") ?? "";
      return { label: label.trim(), name: element.getAttribute("name") ?? element.id ?? "", optionCount: element.tagName.toLowerCase() === "select" ? element.querySelectorAll("option").length : 0 };
    })
  );

  const textBlocks = await page.$$eval("p, li, span, div", (elements) =>
    elements.map((element) => element.textContent?.trim() ?? "").filter((text) => text.length > 30).slice(0, 20).map((text) => ({ snippet: text }))
  );

  return {
    title, url, headings,
    links: links.map((link) => ({ text: link.text, href: link.href, internal: false })),
    buttons, inputs, forms, tables, menus, cards, dropdowns, textBlocks,
  };
}
