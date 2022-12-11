const bcrypt = require('bcrypt');
class User {
    #username
    #password

    constructor(username, password) {
        this.#username = username;
        this.password = password;
    }

    async bcryptPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        return hash
    }

    setPassword(password) {
        this.#password = password;
    }

    getName() {
        return this.#username;
    }

    getPassword() {
        return this.#password;
    }
}

module.exports = {
    User
}