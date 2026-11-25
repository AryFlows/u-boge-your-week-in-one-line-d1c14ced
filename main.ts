import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Monday I planned the week. Friday I apologised to Monday.";

// The gate only accepts 1 to 100 characters, so refuse to write an invalid line.
if (line.length < 1 || line.length > 100 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-100 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
