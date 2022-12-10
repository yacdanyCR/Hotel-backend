const mysql = require('promise-mysql');
const config = require('../../config');

class DB {
    async getConnection() {
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