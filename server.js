const http = require("http");

const PORT = 3002;

http.createServer( (req, res) =>{
    res.writeHead(200 , {"Content-Type": "text/plain"});
    res.write("its Alive");
    console.log('Server running on port ', process.env.PORT || PORT)
    res.end();
}).listen(process.env.PORT || PORT);


var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");