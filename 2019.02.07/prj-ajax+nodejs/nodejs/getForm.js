var http = require("http")

var url = require("url")

var server = http.createServer(function(req,res){
	var queryObj = url.parse(req.url,true).query;
	
	var name = queryObj.name;
	var age = queryObj.age;
	
	res.end(name+age);
})

server.listen(3000,"127.0.0.1")
