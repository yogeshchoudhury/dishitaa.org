
const express = require('express'),
      app = express(),
      ejs = require('ejs'),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/privacy', function(req, res){
    res.send("Hey");
});

app.listen(port, function(){
    console.log('Listening on port ' + port);
});




