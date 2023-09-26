const http = require("node:http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.write("this is the home page");
      res.end();
      break;
    case "/about":
      res.write("this is the about page");
      res.end();
      break;
    default:
      res.write("this page doesn't exist");
  }
});

server.listen(8000, () => {
  console.log("Server listening on port 5000");
});
