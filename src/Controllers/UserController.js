const { DB } = require('../Db/Db.js');
const { User } = require('../Model/UserModel.js');
const bcrypt = require('bcrypt');

const db = new DB();
class UserController {
    async getUser(req, res) {
        const connection = await db.getConnection();
        try {
            const result = await connection.query("SELECT * FROM user");
            res.json(result);
        } catch (error) {

        } finally {
            connection.end();
        }
    }

    async authUser(req, res) {
        const connection = await db.getConnection();
        try {
            const { username, password } = req.body;
            const result = await connection.query(`SELECT * FROM user WHERE username="${username}"`);
            if (result.length > 0) {
                if (await bcrypt.compare(password, result[0]['password'])) {
                    res.status(200).json({ auth: true });
                }
            }
            res.status(200).json({ auth: false })
        } catch (error) {

        } finally {
            connection.end();
        }
    }

    async addUser(req, res) {
        const connection = await db.getConnection();
        try {
            const { username, password } = req.body;
            const user = new User(username, password);
            const hashPassword = await user.bcryptPassword(password);
            user.setPassword(hashPassword);

            const result = await connection.query(`INSERT INTO user (username,password) VALUES ('${user.getName()}','${user.getPassword()}')`);
            res.status(200).json(result);

        } catch (error) {

        } finally {
            connection.end();
        }
    }
}

module.exports = {
    UserController
}