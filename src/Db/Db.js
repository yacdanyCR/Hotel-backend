const mysql = require('promise-mysql');
const config = require('../../config');

class DB {
    getConnection() {
        return mysql.createPool({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database
        })
    }
}

module.exports = {
    DB
}