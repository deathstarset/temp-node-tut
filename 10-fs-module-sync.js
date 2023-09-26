const fs = require("node:fs");

const first = fs.readFileSync("./content/first.txt", "utf-8"); // to read a content from a file we use it
const second = fs.readFileSync("./content/second.txt", "utf-8");
const third = fs.writeFileSync(
  "./content/result-sync.txt",
  `Hello this is the result : ${first} ${second}`
); // to write content into a file we use it => if it exists it will write into it, if its not it will create it and write into it
// and by default it will overwrite
// if we want to append into a file we add another argument
const fourth = fs.writeFileSync("./content/fourth.txt", " Hello Again", {
  flag: "a",
});
