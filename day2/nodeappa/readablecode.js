const readablecode = () => {
  const { Readable } = require("stream");

  async function* generator() {
    yield "pepe";
    yield "paco";
    yield "perico";
    yield "pablo";
  }

  const readable = Readable.from(generator());

  readable.on("data", (chunk) => {
    console.log(chunk);
  });

  readable.on("error", (err) => {
    console.log(err.stack);
  });
};

module.exports = readablecode;
