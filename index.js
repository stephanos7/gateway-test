var express = require("express");
const { pool } = require('./config')

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



// API Operations
const getAllBooks = (req, res, err) => {
  // res.json(["hello from the index service"]);

  // pool.query('SELECT * FROM books',(err, result) => {
  //   if(err){
  //     throw err
  //   }
  //   return res.status(200).json(result.rows)
  // })
    if(err){
      throw err
    }
    return res.status(200).json("hello local world")
}


// routes
app.get("/", (req, res, next) => {
  return getAllBooks(req,res);
  // res.json(["hello from the index service"]);
 });

 app.listen(process.env.PORT || 3500, () => {
  console.log(`Server listening`)
})        