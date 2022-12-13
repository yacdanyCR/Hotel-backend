const express = require('express');
const { BookingController } = require('../Controllers/BookingController');

const BookingRoute = express.Router();
const booking = new BookingController();

BookingRoute.get(('/'), booking.getBookings);
BookingRoute.delete(('/:id'), booking.deleteBooking);

module.exports = {
    BookingRoute
}