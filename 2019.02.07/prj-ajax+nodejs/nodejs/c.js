var fs = require("fs")

fs.readFile(__dirname+"/b.js",function(err,data){
	console.log(data.toString());
})
