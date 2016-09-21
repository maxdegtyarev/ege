/*
    Это файл, который записывает логи
    Он представляет собой Middleware
 */


function logthis(req,res,next){
    var logtext = "[ " + Date.now() + " ]" + "| Открыта страница: " + req.params[0];
    console.log(logtext);
    next();
};

function exporter(){
    return([
        logthis
    ]);
};

module.exports = exporter;