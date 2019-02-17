var express = require("express")

var app = express()

app.set("view engine","ejs")

app.get("/",function(req,res){
	res.render("index",{"a":6})
})

app.listen(3000)
