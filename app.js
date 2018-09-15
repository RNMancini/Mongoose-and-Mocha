var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
console.log('request was made: ' + req.url);
res.writeHead(200, {'Content-Type': 'text/plain'});
var myReadStream = fs.createReadStream = fs.createReadStream(_dirname + '/readMe.txt', 'utf8');
myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
//his local IP address 
console.log('yo dawgs, now listening to port 3000');
