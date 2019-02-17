var http = require("http");

var server = http.createServer(function(req,res){
	res.writeHead(200,{"content-type":"text/html;charset=UTF8"});
	res.end("HelloWorld");
});

server.listen(3000,"127.0.0.1")
