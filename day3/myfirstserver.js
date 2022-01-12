var http = require("http");

var server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Welcome to Node HTTP SErver");
});

server.listen(8088);
console.log("Server is up and running!!");
