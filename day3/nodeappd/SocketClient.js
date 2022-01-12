const net = require("net");
const arr = [
  "Client im delighted",
  "of course not",
  "ok, its ok",
  "of course not",
  "ok, its ok",
  "of course not",
  "ok, its ok",
];
let i = 0;

const client = net.createConnection({ port: 8081 }, () => {
  console.log("Client connected to server");
  //client.write("Hello from socket client");
  while (i < arr.length) {
    client.write(arr[i]);
    i++;
  }
});

client.on("data", (data) => {
  console.log(data.toString());
  client.end();
});
client.on("end", () => {
  console.log("Disconnected form server socket");
});
