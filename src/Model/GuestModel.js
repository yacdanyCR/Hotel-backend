class Guest {
    #name
    #lastname
    #phone
    #country
    #birthdate

    constructor(name, lastname, phone, country, birthdate) {
        this.#name = name;
        this.#lastname = lastname;
        this.#phone = phone;
        this.#country = country;
        this.#birthdate = birthdate;
    }

    getName() {
        return this.#name
    }

    getLastname() {
        return this.#lastname
    }

    getPhone() {
        return this.#phone
    }

    getCountry() {
        return this.#country
    }

    getBirthdate() {
        return this.#birthdate
    }
}

module.exports = {
    Guest
}