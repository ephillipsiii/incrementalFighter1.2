var express = require("express");
var app = express()

app.get('/', function(req,res){
    res.send("mongodb should work now")
})

app.listen(3001)