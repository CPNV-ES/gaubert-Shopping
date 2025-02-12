"use strict";

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
        return this.#items;
    }

    //endregion public methods

    //region private methods
    //endregion private methods
}


