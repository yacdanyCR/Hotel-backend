const { DB } = require("../Db/Db")

const db = new DB();

class BookingController {
    async getBookings(req, res) {
        const connection = await db.getConnection();
        try {
            const result = await connection.query("SELECT * FROM bookings");
            res.status(200).json(result);
        } catch (error) {
            res.status(400);
        } finally {
            connection.end();
        }
    }
}

module.exports = {
    BookingController
}