const express = require("express");
const app = express();

app.get("/",function(request, response){
    response.send("<h1>hello, world!</h1>");
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