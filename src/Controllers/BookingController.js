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


    async deleteBooking(req, res) {
        const connection = await db.getConnection();
        try {
            const { id } = req.params;
            const result = await connection.query(`DELETE FROM bookings WHERE id_guest = ${id}`);
            res.status(200).json(result);
        } catch (error) {

        } finally {
            connection.end();
        }
    }
}

module.exports = {
    BookingController
}