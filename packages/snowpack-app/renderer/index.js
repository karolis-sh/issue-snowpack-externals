const fs = require("fs");
const path = require("path");

/**
 * 1) Breaks with:
 *
 * Uncaught TypeError: Failed to resolve module specifier "fs". Relative references must start with either "/", "./", or "../".
 */
import { readFileVerbose } from "my-node-package";

/**
 * 2) Doesn't break in dev, but also doesn't get bundled - will not run in built electron app
 */
// const { readFileVerbose } = require("my-node-package");

/**
 * 3) Works just fine but the source copy pasted here
 */
// const readFileVerbose = (file) => {
//   const content = fs.readFileSync(file, "utf-8");
//   console.log(content);
//   return content;
// };

const el = document.getElementById("root");

el.innerHTML = "Loading...";

setTimeout(() => {
  const file = path.join(process.cwd(), "snowpack.config.js");

  el.innerHTML = "Reading:\n\n" + file + "\n\n⏳";

  setTimeout(() => {
    el.innerHTML = readFileVerbose(file);
  }, 1000);
}, 1000);
