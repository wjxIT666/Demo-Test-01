var http = require("http")

var fs = require("fs")

var url = require("url")

var path = require("path")

var server = http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	if(pathname.indexOf(".") == -1) {
		pathname += "/getForm.html";
	}
	
	var fileUrl = path.normalize("./demos/"+pathname);
	
	var extname = path.extname(pathname);
	
	fs.readFile(fileUrl,function(err,data){
		if(err) {
			res.writeHead(404,{"content-type":"text/html;charset=UTF8"});
			res.end("Not Found");
		}else {
			var mime = getMime(extname);
			res.writeHead(200,{"content-type":mime});
			res.end(data);
		}
	})
})

server.listen(3000,"127.0.0.1")

function getMime(extname) {
	switch(extname) {
		case ".html":
		return "text/html";
		break;
	}
}
