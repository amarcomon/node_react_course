var express = require("express");
const retLogs = require("./data");
var router = express.Router();

router.get("/", (req, res) => {
  res.send(retLogs());
});

module.exports = router;
