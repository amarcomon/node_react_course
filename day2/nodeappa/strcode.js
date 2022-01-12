const strcode = () => {
  var fs = require("fs");
  var data = "";

  var rs = fs.createReadStream("./mytest.txt");
  rs.setEncoding("utf-8");
  rs.on("data", (chunk) => {
    data += chunk;
  });

  rs.on("end", () => {
    console.log(data);
  });

  rs.on("error", (err) => {
    console.log(err.stack);
  });
  console.log("Program ended");
};

module.exports = strcode;
