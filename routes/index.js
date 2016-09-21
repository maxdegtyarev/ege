var express = require('express');
var router = express.Router();
var taskModel = require('../models/model_task');
router.get('/', function(req,res){
    var auth = true,
        username;

    if (!req.isAuthenticated()){
        auth = false;
    }else{
        username = req.user.name.givenName;
    }
    res.render('p/index', {
        authorized: auth,
        username: username
    });
});

router.get('/author',function(req,res){
    var authorname = req.query.name;
    if (!authorname) authorname='Maxim Degtyarev';
    taskModel.insert(authorname);
    res.render('p/about', {
        name: authorname,
        originame: true
    });

});

module.exports = router;
