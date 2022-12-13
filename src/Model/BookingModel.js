class Booking {
    #idGuest
    #check_in
    #check_out
    #payment

    constructor(check_in, check_out, payment) {
        this.#check_in = check_in;
        this.#check_out = check_out;
        this.#payment = payment;
    }

    getCheckIn() {
        return this.#check_in
    }

    getCheckOut() {
        return this.#check_out
    }

    getPayment() {
        return this.#payment
    }

    getIdGuest() {
        return this.#idGuest
    }

    setIdGuest(idGuest) {
        this.#idGuest = idGuest
    }
}

module.exports = {
    Booking
}