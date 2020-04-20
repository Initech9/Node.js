const express = require("express");
const parser = require("body-parser");

const app = express();
var fs = require('fs');
var os = require("os");

var fileData;

app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");



    fs.readFile('mynewfile1.txt', 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
        fileData = data;
    });

});


app.post("/", function(req, res){

var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);
var name1 = String(req.body.n3);

var result = num1 + num2;
    
res.send("The two numbers added are " + result);


//res.send(fileData);

fs.appendFile('mynewfile1.txt', result + os.EOL + name1 + os.EOL, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 
});



app.get("/mytextfile1",function(request, response){
   
    response.sendFile(__dirname + "/mynewfile1.txt");
    //response.send("<textarea id='w3mission' rows='4' cols='50'>hahaha</textarea>");
console.log(request);
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