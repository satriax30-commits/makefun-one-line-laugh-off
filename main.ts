// One-Line Laugh-Off entry for make.fun (u-zkhiel-one-line-laugh-off-714618ae).
// Writes exactly one original joke line to /output/entry.txt.
// Deterministic: no clock, no randomness, no network, no file reads.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a horoscope promises a special meeting; the punchline inverts
// the setup — the narrator stays home so the special someone won't be
// disappointed by them. Twist lands in the final words, nothing to trim.
const JOKE =
  "My horoscope said I'd meet someone special today, so I stayed home — I didn't want to disappoint them.";

// Fail loudly instead of writing an entry the gate would reject.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n")) {
  throw new Error(`entry line must be a single line of 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
