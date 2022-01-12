const chaincode = () => {
  var fs = require("fs");
  var zlib = require("zlib");

  fs.createReadStream("./mytest.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("./myt.txt.gz"));

  console.log("File is compressed");
};

module.exports = chaincode;