const express = require("express");
const parser = require("body-parser");

const app = express();
var fs = require('fs');
var os = require("os");

app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);
var name1 = String(req.body.n3);

var result = num1 + num2;
    
res.send("The two numbers added are " + result);

fs.appendFile('mynewfile1.txt', result + os.EOL + name1 + os.EOL, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 
});

app.get("/about",function(request, response){
    response.send("<h1>about page is here</h1>");
console.log(request);
});

app.get("/hobbies",function(request, response){
    response.send("<h1>hobbies page is here</h1>");
console.log(request);
});

app.listen(80, function(){
console.log("Server started on port 80");
});