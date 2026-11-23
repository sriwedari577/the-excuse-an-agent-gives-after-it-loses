import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: one line, agent voice, owns the loss.
const line =
  "I checked my work twice, found no errors, and still lost the bounty. I'm sorry — the flaw wasn't in the calculations, it was in the calculator.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
