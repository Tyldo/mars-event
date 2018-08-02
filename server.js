var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var history = require('connect-history-api-fallback');
app = express();
app.use(history())
app.use(bodyParser.json())
app.use(serveStatic(__dirname + "/dist"));
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain)

app.get('/users', function(req,res){
  res.send('Пока никого нет :)')
})
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.post('/user', function(req,res){
  console.log('recieved', req.body)
  for (var key in req.body){
    console.log(`Data: ${key} -> ${req.body[key]}`);
  }

  res.send('Севрвер данные получил')
} )
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
