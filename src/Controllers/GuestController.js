const { DB } = require("../Db/Db");
const { Booking } = require("../Model/BookingModel");
const { Guest } = require("../Model/GuestModel");

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

    async addGuest(req, res) {
        const connection = await db.getConnection();
        try {
            const { name, lastname, phone, birthdate, country } = req.body;
            const guest = new Guest(name, lastname, phone, country, birthdate);

            const { checkin, checkout, payment } = req.body;
            const booking = new Booking(checkin, checkout, payment);

            const resultGuest = await connection.query(`INSERT INTO guest (name,lastname,phone,birthdate,country) VALUES ("${guest.getName()}","${guest.getLastname()}","${guest.getPhone()}","${guest.getBirthdate()}","${guest.getCountry()}")`);

            booking.setIdGuest(resultGuest.insertId);
            const resultBooking = await connection.query(`INSERT INTO bookings (id_guest,check_in,check_out,payment) VALUES (${booking.getIdGuest()},"${booking.getCheckIn()}","${booking.getCheckOut()}","${booking.getPayment()}")`)

            res.status(200).json(resultGuest);
        } catch (error) {

        } finally {
            connection.end();
        }
    }

    async updateGuest(req, res) {
        const connection = await db.getConnection();
        try {
            const { name, lastname, phone, country, id } = req.body;
            const result = await connection.query(`UPDATE guest SET name="${name}",lastname="${lastname}",phone="${phone}",country="${country}" WHERE id=${id}`);

            res.status(200).send(result);
        } catch (error) {

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