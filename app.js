var express = require('express'),
    app = express(),
    co = require('co'),
    logger = require('./lib/logs'),
    path = require('path');

//Sets
app.set('views', path.join(__dirname,'/pages'));
app.set('view engine', 'pug');
app.set('view cache');

//Middleware
app.use(express.static(path.join(__dirname, '/static')));

app.get('/',function(req,res){
    res.render('p/index');
})
//Starting server

var port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log('Great! Server has started on port: ' + port);
});

module.exports = app;
