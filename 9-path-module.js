const path = require("node:path");
console.log(path.sep); // gets the path seperator in this case is /
console.log(path.join("path1", "path2")); // joins segments of paths into one path
console.log(path.basename(__filename)); // gives the base name of a path to a file
console.log(path.dirname(__filename)); // gives the dir name of a path to a file

const absolute = path.resolve("path1"); // it takes segments of paths and resolves them into absolute paths
console.log(absolute);
