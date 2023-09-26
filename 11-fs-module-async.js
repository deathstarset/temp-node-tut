const fs = require("node:fs");
// we gonna take the asynchronous versions of readFileSync and writeFileSync
// if we dont provide encoding we will get a buffer
fs.readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  fs.readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    fs.writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
