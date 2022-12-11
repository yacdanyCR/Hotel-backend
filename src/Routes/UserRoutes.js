const express = require('express');
const { UserController } = require('../Controllers/UserController');
const UserRoute = express.Router();

const user = new UserController();

UserRoute.get(('/'), user.getUser);
UserRoute.post(('/'), user.addUser);
UserRoute.get(('/login'), user.authUser);

module.exports = {
    UserRoute
}