var express= require('express');
var router = express.Router();
var checkLogin = require('../lib/auth/checkAuth');
var passport = require('passport');

//Функция делогирования

router.get('/exit', function(req,res){
    req.logout();
    res.redirect('/');
})
router.get('/', checkLogin, function(req,res){
    res.send(req.user);
});
module.exports = router;