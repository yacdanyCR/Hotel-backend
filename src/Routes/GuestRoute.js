const express = require('express');
const { GuestController } = require('../Controllers/GuestController');
const GuestRoute = express.Router();

const guest = new GuestController();

GuestRoute.get(('/'), guest.getAllGuest);
GuestRoute.post(('/'), guest.addGuest);
GuestRoute.delete(('/:id'), guest.deleteGuest);
GuestRoute.put(('/'), guest.updateGuest);
GuestRoute.get(('/:search'), guest.serchGuest);

module.exports = {
    GuestRoute
}