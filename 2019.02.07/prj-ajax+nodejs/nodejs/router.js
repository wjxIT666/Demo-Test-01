exports.showIndex = function(req,res) {
	res.writeHead(200,{"content-type":"text/html;charset=UTF8"});
	res.end("Index Page");
}

exports.showStudent = function(req,res) {
	var id = req.url.substr(9,6);
	res.writeHead(200,{"content-type":"text/html;charset=UTF8"});
	res.end("Student Page"+id);
}

exports.show404 = function(req,res) {
	res.writeHead(404,{"content-type":"text/html;charset=UTF8"});
	res.end("Not Found");
}