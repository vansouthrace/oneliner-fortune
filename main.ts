import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "You will soon be asked to do something impossible, on a deadline that already passed, by someone who says 'it's easy.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
