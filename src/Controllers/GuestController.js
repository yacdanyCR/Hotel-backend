const { DB } = require("../Db/Db")

const db = new DB();

class GuestController {
    async getAllGuest(req, res) {
        const connection = await db.getConnection();
        try {
            const result = await connection.query("SELECT * FROM guest");
            res.status(200).json(result);
        } catch (error) {
            res.status(400);
        } finally {
            connection.end();
        }
    }

    async deleteGuest(req, res) {
        const connection = await db.getConnection();
        try {
            const { id } = req.params;
            const result = await connection.query(`DELETE FROM guest WHERE id = ${id}`);
            res.status(200).json(result);
        } catch (error) {

        } finally {
            connection.end();
        }
    }
}

module.exports = {
    GuestController
}