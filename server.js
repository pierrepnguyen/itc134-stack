var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.render("index");
})

app.get('/tutorial', function(req,res){
  res.render("tutorial");
})

app.get('/hello', function(req,res){
  res.render("hello");
})

app.listen(8000, function() {
  console.log("listening on port 8000");
  console.log("close the server with ctrl + c or ^ + c");
});