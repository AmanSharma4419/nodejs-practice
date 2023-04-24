const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const myUrl = url.parse(req.url, true);
  const log = `${Date.now()}: ${req.method} "New request recived from ${
    req.url
  }\n`;

  fs.appendFile("log.txt", log, (err, sucess) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home-page");
        break;
      case "/about":
        res.end("My name is Aman Sharma");
        break;
      case "/favicon.ico":
        res.end();
        break;
      case "/search":
        res.end(`Here are your results for search ${myUrl.query.search_query}`);
        break;
      default:
        return res.end("NOT FOUND");
    }
  });
});

server.listen(8000, () => {
  console.log(`listening at PORT ${8000}`);
});
