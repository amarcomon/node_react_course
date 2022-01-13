var express = require("express");
const Car = require("./Cars");
var app = express();

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/car/:name/:brand", (req, res) => {
  let name = req.params.name;
  let brand = req.params.brand;
  let car = new Car(name, brand);
  res.send(JSON.stringify(car));
});

app.listen(8080, () => {
  console.log("Server Running");
});
