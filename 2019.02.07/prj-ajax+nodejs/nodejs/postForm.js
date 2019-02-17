var http = require("http")

var querystring = require("querystring")

var server = http.createServer(function(req,res){
	var alldata = "";
	req.addListener("data",function(chunk){
		alldata += chunk;
	})
	
	req.addListener("end",function(){
		var dataString = alldata.toString();
		var queryObj = querystring.parse(dataString);
		console.log(queryObj.name);
		console.log(queryObj.age);
	})
		res.end("ok");
})

server.listen(3000,"127.0.0.1")
