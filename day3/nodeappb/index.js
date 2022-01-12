var http = require("http");
var finalHandler = require("finalhandler");
var serveStatic = require("serve-static");

var serve = serveStatic("./");

const server = http.createServer((req, res) => {
  let done = finalHandler(req, res);
  serve(req, res, done);
});

server.listen(8080);
console.log("Static server is running");
