const express = require('express');
const { GuestController } = require('../Controllers/GuestController');
const GuestRoute = express.Router();

const guest = new GuestController();

GuestRoute.get(('/'), guest.getAllGuest);
GuestRoute.delete(('/:id'), guest.deleteGuest);

module.exports = {
    GuestRoute
}