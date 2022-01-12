const bCode = () => {
  var fs = require("fs");

  console.log("Blocking Code");

  let data = fs.readFileSync("./mytest.txt");
  console.log(data.toString());
  console.log("Program ended");
};
module.exports = bCode;
