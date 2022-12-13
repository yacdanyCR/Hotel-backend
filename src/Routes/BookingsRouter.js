const express = require('express');
const { BookingController } = require('../Controllers/BookingController');

const BookingRoute = express.Router();
const bookng = new BookingController();

BookingRoute.get(('/'), bookng.getBookings);

module.exports = {
    BookingRoute
}