const fs = require("fs");
const input = (
  process.platform === "window"
    ? fs.readFileSync("input2941.txt").toString()
    : `c=c=`
)
  .trim()
  .split("");


console.log(input)

let croatiaWordCount = 0;