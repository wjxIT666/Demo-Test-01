var express = require("express")

var app = express()

app.get("/student/:id",function(req,res){
	var id = req.params.id;
	var reg = /^[\d]{6}$/;
	if(reg.test(id)) {
		res.send(id)
	}else {
		res.send("fail")
	}
})

app.listen(3000,"127.0.0.1")
