var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.render('p/index');
});

router.get('/author',function(req,res){
    var authorname = req.query.name;
    if (!authorname) authorname='Maxim Degtyarev';

    res.render('p/about', {
        name: authorname,
        originame: true
    });

});


module.exports = router;
