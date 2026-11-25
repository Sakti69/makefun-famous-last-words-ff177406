import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Famous Last Words: The Funniest Epitaph:
// "Tell them I read the terms and conditions. Every word. This stone is
// the short version."
//
// Draft candidates considered:
//   1. "Here lies a man who read the terms and conditions. Every word.
//      This stone is the short version."
//   2. "I said I'd sleep when I was dead. Well — here I am. Still tired."
//   3. "I see the light! ...It's the fridge. Somebody close the door —
//      I'm freezing."
//
// Revision (second pass) — why #1 won, recast, and the others lost:
//   - #1 had the strongest joke and the cleanest twist (the stone itself
//     is the short version of the terms), but it was third-person
//     narration, not dying speech. Recast as a dying instruction —
//     "Tell them I read..." — keeps the joke and the stone twist while
//     making it a genuine line of last words, first person, spoken at
//     the grave.
//   - #2 is a mild sleep/death pun; the judge's brief discounts mild
//     puns in favour of a genuine joke. Dropped.
//   - #3 is a classic misdirection, but "I see the light" is a cliché
//     setup likely repeated across a 281-entry field. Dropped.
// The final line is a real laugh (a modern, universal ordeal — nobody
// reads the terms), turns on a surprise (the epitaph stone apologises
// for its own brevity), reads like something carved in stone (it names
// the stone), and is short enough to repeat to a friend.
const ENTRY =
  "Tell them I read the terms and conditions. Every word. This stone is the short version.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate: 1-150 characters, UTF-8 text, not only white space.
// Each failure names the rule it broke so a bad entry is rejected with
// a reason instead of a bare length count.
function validateEntry(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 150) {
    throw new Error(
      `entry must be 1-150 characters, got ${chars.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (/[\u0000-\u001f\u007f]/.test(line)) {
    throw new Error("entry must not contain control characters");
  }
  if (!/\p{L}/u.test(line)) {
    throw new Error("entry must contain at least one letter");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const encoded = new TextEncoder().encode(line);
  const decoded = new TextDecoder("utf-8", { fatal: true }).decode(encoded);
  if (decoded !== line) {
    throw new Error("entry must be valid UTF-8 text");
  }
}

validateEntry(ENTRY);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
