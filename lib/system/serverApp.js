exports.module = function() {
    console.log('Starting server...')
    var port = process.env.PORT || 3000;
    app.listen(port, function () {
        console.log('Great! Server has started on port: ' + port);
    });
};
