var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
  res.json(["hello from the index service"]);
 });

app.listen(3500, () => {
 console.log("Server running on port 3500");
});