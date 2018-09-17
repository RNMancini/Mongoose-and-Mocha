var app = require('express');
var app = express();

app.get('/', function(req, res){
 
    res.sendFile(_dirname + '/index.html');
});

app.get('/contact', function(req, res){
    res.sendFile(_dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
    res.send('You are viewing the profile of ' + req.params.name);
});

app.listen(process.env.PORT, process.env.IP, 3000);