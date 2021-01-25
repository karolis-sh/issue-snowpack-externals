const fs = require("fs");
const path = require("path");

const { readFileVerbose } = require("my-node-package");
// import { readFileVerbose } from "my-node-package";

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
