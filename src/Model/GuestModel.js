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
}

exports.module = {
    Guest
}