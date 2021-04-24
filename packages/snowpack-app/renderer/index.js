const path = require("path");

/**
 * 1) Breaks
 */
import { readFileVerbose } from "my-node-package";

/**
 * 2) Doesn't break in dev, but no typings in TypeScript
 */
// const { readFileVerbose } = require("my-node-package");

const el = document.getElementById("root");

el.innerHTML = "Loading...";

setTimeout(() => {
  const file = path.join(process.cwd(), "snowpack.config.js");

  el.innerHTML = "Reading:\n\n" + file + "\n\n⏳";

  setTimeout(() => {
    el.innerHTML = readFileVerbose(file);
  }, 1000);
}, 1000);
