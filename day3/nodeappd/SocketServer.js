const net = require("net");

const server = net
  .createServer((socket) => {
    socket.on("data", (data) => {
      console.log(data.toString());
    });
    socket.write("Hello from server socket");
    socket.end("Server is closing the connection");
  })
  .on("error", (err) => {
    console.log(err.stack);
  });

server.listen(8081, () => {
  console.log("open server socket");
});
