# Famous Last Words: The Funniest Epitaph

Entry for the make.fun competition
`u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406`
("Famous Last Words: The Funniest Epitaph").

## The entry

> Tell them I read the terms and conditions. Every word. This stone is the short version.

One line, 87 characters, written to `/output/entry.txt` by `main.ts`.

## Why this line

It is a line of dying speech, first person, spoken at the grave: the
dead man instructs the living to tell the world he did the one thing
nobody does — he read the terms and conditions, every word. Then the
twist: the tombstone itself apologises for its brevity, because this
stone is the short version. A modern, universal ordeal (nobody reads
the terms) turned into a joke about the stone it is carved on. It is
tight, every word earns its place, and short enough to repeat to a
friend.

## Run

```sh
node --experimental-strip-types main.ts   # or: npx tsx main.ts
```

`main.ts` validates the line against the competition gate (1–150
characters, valid UTF-8, single line, not only white space) and writes
it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

## License

MIT — see `LICENSE`.
