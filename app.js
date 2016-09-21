var express = require('express'),
    app = express(),
    co = require('co'),
    logger = require('./lib/logs'),
    path = require('path'),
    indexRouter = require('./routes/index'),
    cabRouter = require('./routes/cabinet'),
    examRouter = require('./routes/exam'),
    bodyParser = require('body-parser');


//Для авторизациия

var passport = require('passport'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    strategy = require('./lib/auth/setupAuth');

//Движки и кеширование

app.set('views', path.join(__dirname,'/pages'));
app.set('view engine', 'pug');
app.set('view cache');
 
//Middlewares
app.use(express.static(path.join(__dirname, '/static')));
app.use(cookieParser());
app.use(session({ secret: 'HJsvrwUUatCpRgoq7BZjcTisHrcpUH5LHVi7SjS9Y_oI-F7QO0Zu1j1GpKJzBzuX', resave: false,  saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
//Маршрутизация

app.use('/', indexRouter);
app.use('/cab', cabRouter);
app.use('/exam', examRouter);

//Авторизация

app.get('/callback',
    passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
    function(req, res) {
        if (!req.user) {
            throw new Error('user null');
        }
        res.redirect("/cab");
    });

//Starting server
startServer(); // Written from linux
//kek
function startServer() {
    console.log('Starting server...')
    var port = process.env.PORT || 3000;
    app.listen(port, function () {
        console.log('Great! Server has started on port: ' + port);
    });
}
module.exports = app;
