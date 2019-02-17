var http = require("http")

var server = http.createServer(function(req,res){
	if(req.url == "/") {
		res.writeHead(200,{"content-type":"text/html;charset=UTF8"});
		res.end("success");
	}else {
		res.writeHead(404,{"content-type":"text/html;charset=UTF8"});
		res.end("fail");
	}
});

server.listen(3000,"127.0.0.1")
