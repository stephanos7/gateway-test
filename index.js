var express = require("express");

// define middleware
var bodyParser = require("body-parser");
var morgan = require('morgan');
// instantiate express server
var app = express();

// use middleware
  // use body-parser to return middleware that parse json & url-encoded bodies
  // the extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}))

app.use(morgan(`:method :url :status :res[content-length] - :response-time ms`))

app.get("/", (req, res, next) => {
  res.json(["hello from the index service"]);
 });

 app.listen(process.env.PORT || 3500, () => {
  console.log(`Server listening`)
})        