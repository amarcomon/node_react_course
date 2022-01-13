const Login = require("./Login");

const retLogs = () => {
  let logins = [];
  let arr = ["pepe", "paco", "perico", "fofo"];
  let arr1 = ["pepes", "pacos", "pericos", "fofos"];

  for (let i = 0; i < arr.length; i++) {
    let login = new Login(arr[i], arr1[1]);
    logins.push(login);
  }
  let log = JSON.stringify(logins);
  return log;
};

module.exports = retLogs;
