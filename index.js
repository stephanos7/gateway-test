var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
  res.json(["hello from the index service"]);
 });

 app.listen(process.env.PORT || 3500, () => {
  console.log(`Server listening`)
})        