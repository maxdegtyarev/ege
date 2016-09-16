var express = require('express'),
    app = express(),
    co = require('co'),
    logger = require('./lib/logs'),
    path = require('path'),
    indexRouter = require('./routes/index');

//Движки и кеширование

app.set('views', path.join(__dirname,'/pages'));
app.set('view engine', 'pug');
app.set('view cache');

//Middlewares
app.use(express.static(path.join(__dirname, '/static')));
app.use('/', indexRouter);



//Starting server
var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log('Great! Server has started on port: ' + port);
});

module.exports = app;
