// const fs = require("fs");

// exports.readFileVerbose = (file) => {
//   const content = fs.readFileSync(file, "utf-8");
//   console.log(content);
//   return content;
// };

exports.readFileVerbose = (file) => {
  console.log(file);
  return file;
};
