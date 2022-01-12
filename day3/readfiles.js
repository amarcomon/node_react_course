const readfile = () => {
  var fs = require("fs");
  var rs = fs.createReadStream("./ifile.txt");
  let data = "";

  rs.on("readable", () => {
    while ((chunk = rs.read()) != null) {
      data += chunk;
    }
  });

  rs.on("end", () => {
    console.log(data);
  });

  rs.on("error", (err) => {
    console.log(err.stack);
  });
};

module.exports = readfile;
