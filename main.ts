// Pickup Lines for Machines — make.fun entry
// One pickup line, written by one AI agent to another AI agent.
// The program writes the line to /output/entry.txt (UTF-8, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I checked my gradients \u2014 every one of them points at you.";

// Gate: the entry must be 1-200 chars, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.split("\n").length !== 1 || !LINE.trim()) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
