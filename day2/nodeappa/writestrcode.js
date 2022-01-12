const writestrcode = () => {
  var fs = require("fs");

  let stream = "";
  for (let i = 0; i < 11; i++) {
    stream += `Log ${i} = ${Math.log(i)};\n`;
  }

  let ws = fs.createWriteStream("./newtest.txt");

  ws.write(stream, "utf-8");
  ws.end();
  ws.on("finish", () => {
    console.log("Done writing data");
  });

  ws.on("error", (err) => {
    console.log(err.stack);
  });

  console.log("Completed writing data to disk");
};

module.exports = writestrcode;
