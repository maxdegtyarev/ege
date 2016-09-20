var pgp = require('pg-promise')(),
    connConfig = {
        host: '127.0.0.1',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: ''
    };

var db = pgp(connConfig);
module.exports = {pgp,db};
