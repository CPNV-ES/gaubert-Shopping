"use strict";

const CartItem = require("../CartItem/CartItem.js");
const EmptyCartException = require("./EmptyCartException.js");
const UpdateCartException = require("./UpdateCartException.js")

module.exports = class CartItem {
    //region private attributes
    #items
    //endregion private attributes

    //region public methods
    constructor(cartItems) {
        this.#items = cartItems || [];
    }

    get items() {
        if (Array.isArray(this.#items) && this.#items.length === 0)
            throw new EmptyCartException;
        return this.#items;
    }

    get total() {
        if (Array.isArray(this.#items) && this.#items.length === 0)
            throw new EmptyCartException;
        let total = 0;
        this.#items.forEach(it => {
            total += it.price * it.quantity;
        });
        return total;
    }

    //endregion public methods

    //region private methods
    //endregion private methods
}


