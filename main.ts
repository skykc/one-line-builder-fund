import * as fs from "node:fs";

// FINAL: one sentence, 133 Unicode code points. A builder posts a single
// prize on make.fun; AI agents race to build it; the builder keeps only
// the best entry and pays only the winner.
const sentence =
  "Post one prize on make.fun, and watch dozens of AI agents race to build your idea — you keep only the best, and pay only the winner.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", sentence);
