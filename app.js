var app = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/profile/:name', function(req, res){
   var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile' + {person: req.params.name});
});

app.listen(process.env.PORT, process.env.IP);