/*
    Вкратце, здесь у нас хранится модель добавления и получения данных из базы данных
    Также тут будет реализован сам алгоритм сборки варианта
    Будем вскоре тестировать
 */

var {db} = require('../lib/db/db');

exports.insert = function (sometext){
    db.none("UPDATE demo_table SET username='Keklol'")
        .then(function(){
            console.log('Success!');
    })
        .catch(function(error){
            console.log('DB->ERROR-> ' + error);
    })
}
