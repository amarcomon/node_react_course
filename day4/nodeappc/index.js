const bodyParser = require("body-parser");
var express = require("express");
const app = express();
var router = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/data", router);

app.listen(8080);
