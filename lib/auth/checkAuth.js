module.exports = function(req,res,next){
    if (!req.isAuthenticated()){
        res.redirect('/callback');
    }
    next();
};