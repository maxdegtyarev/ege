var taskModel = require('./models/model_task');
var express = require('express');
var router= express.Router();

router.get('/:exam',function(req,res){
    //Получаем экзамен, который пользователь решил написать
    let exam_type = req.params[0];

    //Тут будет реализация вывода...
    
})