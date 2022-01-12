const http = require("http");
const WebSocketServer = require("websocket").server;

const server = http.createServer();
server.listen(8100);

const wsServer = new WebSocketServer({ httpServer: server });

wsServer.on("request", (request) => {
  const connection = request.accept(null, request.origin);
  connection.on("message", () => {
    console.log("Received message", m.utf8Data);
  });
  connection.sendUTF("Hi iam socket server");
  wsServer.on("close", (r, d) => {
    console.log("Client disconnected");
  });
});
