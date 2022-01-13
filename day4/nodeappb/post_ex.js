var bodyParser = require("body-parser");
var express = require("express");
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false }); // cuando envías un formulario se encuentra codificadon en el body, esta variable es para tratarla

app.use(express.static("public"));
app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});

app.post("/p_post", urlencodedParser, (req, res) => {
  let resp = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  console.log(resp);
  res.end(JSON.stringify(resp));
});

app.listen(8080, () => {
  console.log("Server running");
});
