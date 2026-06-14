import fs from "fs";
import path from "path";

export interface AiFlowGenerationConfig {
  allowDestructiveActions: boolean;
  defaultSuite: string;
  defaultTags: string[];
}

const DESTRUCTIVE_PATTERNS = [
  { pattern: /\bdelete\b/i, reason: "Delete action" },
  { pattern: /\bremove\b/i, reason: "Remove action" },
  { pattern: /\bcancel\s+order\b/i, reason: "Cancel order" },
  { pattern: /\bpayment\b/i, reason: "Payment action" },
  { pattern: /\bsubmit\s+payment\b/i, reason: "Submit payment" },
  { pattern: /\btransfer\s+money\b/i, reason: "Transfer money" },
  { pattern: /\blogout\b/i, reason: "Logout action" },
  { pattern: /\birreversible\b/i, reason: "Irreversible action" },
  { pattern: /\baccount\s+closure\b/i, reason: "Account closure" },
  { pattern: /\bdestructive\b/i, reason: "Destructive admin action" },
  { pattern: /\bclose\s+account\b/i, reason: "Close account" },
  { pattern: /\bterminate\b/i, reason: "Terminate action" },
  { pattern: /\bsubmit\s+order\b/i, reason: "Submit order" },
  { pattern: /\bplace\s+order\b/i, reason: "Place order" },
  { pattern: /\bpay\s+now\b/i, reason: "Pay now" },
  { pattern: /\bmake\s+payment\b/i, reason: "Make payment" },
];

export function getDefaultAiFlowConfig(): AiFlowGenerationConfig {
  return {
    allowDestructiveActions: false,
    defaultSuite: "sanity",
    defaultTags: ["ai-generated", "sanity"],
  };
}

export function loadAiFlowConfig(configPath?: string): AiFlowGenerationConfig {
  const resolvedPath = configPath ?? path.resolve(process.cwd(), "config", "test-input.json");
  try {
    const raw = fs.readFileSync(resolvedPath, "utf-8");
    const config = JSON.parse(raw);
    if (config.aiFlowGeneration) {
      return {
        allowDestructiveActions: config.aiFlowGeneration.allowDestructiveActions ?? false,
        defaultSuite: config.aiFlowGeneration.defaultSuite ?? "sanity",
        defaultTags: config.aiFlowGeneration.defaultTags ?? ["ai-generated", "sanity"],
      };
    }
  } catch {
    // ignore
  }
  return getDefaultAiFlowConfig();
}

export interface GuardResult {
  allowed: boolean;
  reason?: string;
}

export function checkActionSafety(
  stepDescription: string,
  allowDestructive: boolean
): GuardResult {
  if (allowDestructive) {
    return { allowed: true };
  }

  for (const entry of DESTRUCTIVE_PATTERNS) {
    if (entry.pattern.test(stepDescription)) {
      return {
        allowed: false,
        reason: `Blocked by safe-action guard: "${entry.reason}" detected in step "${stepDescription}". Set allowDestructiveActions: true in config to permit this.`,
      };
    }
  }

  return { allowed: true };
}

export function isDestructiveStep(stepDescription: string): boolean {
  return DESTRUCTIVE_PATTERNS.some((entry) => entry.pattern.test(stepDescription));
}
