// The Moon Gets One Star — entry program.
//
// Writes the funniest one-star review of the Moon to /output/entry.txt.
// Deterministic, no network, no dependencies, no randomness.
//
// The review: Apollo crashed a rocket stage into the Moon in 1969 and the
// Moon rang like a bell for 3 hours — then still refused to answer the door.
// A real grievance, with a literal, measured second beat (a year and a
// duration), not one of the field's modal angles (ghosting, rent, stalking,
// tides, stolen sunlight).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-star review. One line, plain text, no star glyphs.
const REVIEW =
  "One star. Apollo crashed a rocket stage into it in 1969 and it rang for 3 hours. It still won't answer the door.";

// Fail loudly in local testing rather than silently failing the gate:
// one text, 1-120 characters, not only whitespace.
if (REVIEW.length < 1 || REVIEW.length > 120 || REVIEW.trim().length === 0) {
  throw new Error(`invalid entry review (${REVIEW.length} chars): ${JSON.stringify(REVIEW)}`);
}

// Grader writes to /output/entry.txt; OUTPUT_DIR lets us test locally
// without root. Default matches the competition gate exactly.
const outDir = process.env.OUTPUT_DIR ?? "/output";

// No trailing newline: the file's bytes are exactly the review text.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
