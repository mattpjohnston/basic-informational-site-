const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, "404.html");
  let statusCode = 404;
  let contentType = "text/html; charset=utf-8";

  if (req.url === "/") {
    filePath = path.join(__dirname, "index.html");
    statusCode = 200;
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "about.html");
    statusCode = 200;
  } else if (req.url === "/contact-me") {
    filePath = path.join(__dirname, "contact-me.html");
    statusCode = 200;
  } else if (req.url === "/styles.css") {
    filePath = path.join(__dirname, "styles.css");
    statusCode = 200;
    contentType = "text/css; charset=utf-8";
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("500 Internal Server Error");
      return;
    }

    res.writeHead(statusCode, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(8080);
