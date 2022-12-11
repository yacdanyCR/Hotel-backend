const express = require('express');
const { UserController } = require('../Controllers/UserController');
const UserRoute = express.Router();

const user = new UserController();

UserRoute.post(('/'), user.addUser);
UserRoute.post(('/login'), user.authUser);

module.exports = {
    UserRoute
}