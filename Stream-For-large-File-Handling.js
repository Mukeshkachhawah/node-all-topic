const fs = require("fs");
const readLine = require("readline");

const r1 = readLine.createInterface({
  input: fs.createReadStream("input.txt"),
  output: process.stdout,
  terminal: false,
});

r1.on("line", (line) => {
  console.log(line);
});
