var express = require("express")

var app = express()

app.get("/",function(req,res){
	res.send("HelloWorld2")
})

app.listen(3000)
