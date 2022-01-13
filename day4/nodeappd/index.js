var express = require("express");
const bodyParser = require("body-parser");
const app = express();
var mysql = new require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "databasename",
});

let names = [];
let emails = [];
let mobiles = [];

con.connect((err) => {
  con.query("select * from myregist", (req, res, fields) => {
    res.forEach((element) => {
      let name = element["name"]; //campo name de la tabla myregist
      names.push(name);
      let email = element["email"]; //campo email de la tabla myregist
      emails.push(email);
      let mobile = element["mobile"]; //campo mobile de la tabla myregist
      mobiles.push(mobile);
    });
  });
});

app.get("/values", (req, res) => {
  // logic to show values from database
  let fin =
    "<center><table border=1><tr><td>Name</td><td>Email</td><td>Mobile</td></tr>";
  for (let i = 0; i < names.length; i++) {
    const a = names[i];
    const b = emails[i];
    const c = mobiles[i];
    fin += "<tr><td>" + a + "</td><td>" + b + "</td><td>" + c + "</td></tr>";
  }
  fin += "</table></center>";
  res.send(fin);
});

app.listen(8080);

/* 
comando para crear tabla en base de datos
create table myregist(name varchar(50), email varchar(50) primary key,mobile varchar(50)); */
