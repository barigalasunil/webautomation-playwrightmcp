import fs from "fs";
import path from "path";

export type FlowActionType =
  | "open"
  | "click"
  | "fill"
  | "select"
  | "verify_visible"
  | "verify_text"
  | "search"
  | "login"
  | "navigate"
  | "wait"
  | "scroll"
  | "unknown";

export interface FlowStep {
  id: number;
  raw: string;
  actionType: FlowActionType;
  target?: string;
  value?: string;
  pageIdentifier?: string;
  mapped: boolean;
  mappedElement?: string;
  mappedPage?: string;
  locatorStrategy?: string;
  safe: boolean;
  safetyReason?: string;
  needsExploration: boolean;
}

export interface FlowPlan {
  sourceFile: string;
  generatedAt: string;
  suite: string;
  tags: string[];
  steps: FlowStep[];
}

const ACTION_PATTERNS: { pattern: RegExp; type: FlowActionType }[] = [
  { pattern: /^(open|go\s+to|launch|navigate\s+to)\b/i, type: "open" },
  { pattern: /^(navigate|go\s+back|go\s+forward)\b/i, type: "navigate" },
  { pattern: /^\s*click\b/i, type: "click" },
  { pattern: /^\s*(fill|enter|type|input)\b/i, type: "fill" },
  { pattern: /^\s*select\b/i, type: "select" },
  { pattern: /^\s*(verify|check|validate|assert|ensure|confirm)\s+(visible|displayed|shown|appears|present)\b/i, type: "verify_visible" },
  { pattern: /^\s*(verify|check|validate|assert|ensure|confirm)\s+(text|contains|matches)\b/i, type: "verify_text" },
  { pattern: /^\s*(verify|check|validate|assert|ensure|confirm)\b/i, type: "verify_visible" },
  { pattern: /\bsearch\b/i, type: "search" },
  { pattern: /\blogin\b|\bsign\s*in\b/i, type: "login" },
  { pattern: /^\s*wait\b/i, type: "wait" },
  { pattern: /^\s*scroll\b/i, type: "scroll" },
];

function detectActionType(raw: string): FlowActionType {
  for (const entry of ACTION_PATTERNS) {
    if (entry.pattern.test(raw.trim())) {
      return entry.type;
    }
  }
  return "unknown";
}

function extractTarget(raw: string, actionType: FlowActionType): string | undefined {
  const trimmed = raw.trim();

  switch (actionType) {
    case "open": {
      const m = trimmed.match(/^(?:open|go\s+to|launch|navigate\s+to)\s+(.+)/i);
      return m ? m[1].trim() : undefined;
    }
    case "click": {
      const m = trimmed.match(/^\s*click\s+(?:on\s+)?(?:(?:the|a|an)\s+)?(.+)/i);
      if (m) return m[1].trim();

      const m2 = trimmed.match(/^\s*click\s+(.+)/i);
      return m2 ? m2[1].trim() : undefined;
    }
    case "fill": {
      const m = trimmed.match(/^\s*(?:fill|enter|type|input)\s+(?:(?:the|a|an)\s+)?(.+?)(?:\s+with\s+|\s+as\s+)(.+)/i);
      if (m) return m[1].trim();
      const m2 = trimmed.match(/^\s*(?:fill|enter|type|input)\s+(.+)/i);
      return m2 ? m2[1].trim() : undefined;
    }
    case "verify_visible": {
      const m = trimmed.match(/^\s*(?:verify|check|validate|assert|ensure|confirm)\s+(?:that\s+)?(?:(?:the|a|an)\s+)?(.+?)(?:\s+is\s+|\s+are\s+|\s+should\s+be\s+)(?:visible|displayed|shown|appears|present)/i);
      if (m) return m[1].trim();
      const m2 = trimmed.match(/^\s*(?:verify|check|validate|assert|ensure|confirm)\s+(?:that\s+)?(?:(?:the|a|an)\s+)?(.+)/i);
      return m2 ? m2[1].trim() : undefined;
    }
    case "verify_text": {
      const m = trimmed.match(/^\s*(?:verify|check|validate|assert|ensure|confirm)\s+(?:that\s+)?(?:(?:the|a|an)\s+)?(.+?)(?:\s+contains\s+|\s+matches\s+|\s+equals\s+|\s+is\s+)(.+)/i);
      return m ? m[1].trim() : undefined;
    }
    case "select": {
      const m = trimmed.match(/^\s*select\s+(?:(?:the|a|an)\s+)?(.+)/i);
      return m ? m[1].trim() : undefined;
    }
    case "search": {
      const m = trimmed.match(/\bsearch\s+(?:for\s+)?(.+)/i);
      return m ? m[1].trim() : undefined;
    }
    case "wait": {
      const m = trimmed.match(/wait\s+(?:for\s+)?(.+)/i);
      return m ? m[1].trim() : undefined;
    }
    case "scroll": {
      const m = trimmed.match(/scroll\s+(?:to\s+)?(.+)/i);
      return m ? m[1].trim() : undefined;
    }
    default:
      return undefined;
  }
}

function extractValue(raw: string, actionType: FlowActionType): string | undefined {
  if (actionType === "fill") {
    const m = raw.trim().match(/(?:with|as)\s+(.+)/i);
    return m ? m[1].trim() : undefined;
  }
  if (actionType === "verify_text") {
    const m = raw.trim().match(/(?:contains|matches|equals|is)\s+(.+)/i);
    return m ? m[1].trim() : undefined;
  }
  if (actionType === "select") {
    const m = raw.trim().match(/(?:option|value)\s+(.+)/i);
    return m ? m[1].trim() : undefined;
  }
  return undefined;
}

function extractPageIdentifier(raw: string): string | undefined {
  const trimmed = raw.trim().toLowerCase();
  if (
    trimmed.includes("home") ||
    trimmed.includes("main") ||
    trimmed.includes("landing") ||
    trimmed.includes("dashboard")
  ) {
    return "home";
  }

  const pageMatch = trimmed.match(/(?:the\s+)?(\w+(?:\s+\w+)?)\s+page/i);
  return pageMatch ? pageMatch[1].trim() : undefined;
}

export function parseUserFlow(filePath: string, suite: string = "sanity", tags: string[] = ["ai-generated", "sanity"]): FlowPlan {
  const resolvedPath = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`User flow file not found: ${resolvedPath}`);
  }

  const content = fs.readFileSync(resolvedPath, "utf-8");
  const lines = content
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith("#") && !l.startsWith("//"));

  const steps: FlowStep[] = lines.map((line, index) => {
    const actionType = detectActionType(line);
    const target = extractTarget(line, actionType);
    const value = extractValue(line, actionType);
    const pageIdentifier = extractPageIdentifier(line);

    return {
      id: index + 1,
      raw: line,
      actionType,
      target,
      value,
      pageIdentifier,
      mapped: false,
      needsExploration: false,
      safe: true,
    };
  });

  return {
    sourceFile: resolvedPath,
    generatedAt: new Date().toISOString(),
    suite,
    tags,
    steps,
  };
}

export function saveFlowPlan(flowPlan: FlowPlan, outputPath?: string): string {
  const resolvedPath = outputPath ?? path.resolve(process.cwd(), "generated", "flow-plan.json");
  const dir = path.dirname(resolvedPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(resolvedPath, JSON.stringify(flowPlan, null, 2), "utf-8");
  return resolvedPath;
}
