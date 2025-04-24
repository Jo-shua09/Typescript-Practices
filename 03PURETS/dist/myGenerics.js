"use strict";
const score = [];
const names = [];
function identity1(val) {
    return val;
}
function identity2(val) {
    return val;
}
function identity3(val) {
    return val;
}
// identity3("josh");
function identity4(val) {
    return val;
}
identity4({
    brand: "",
    type: 0,
});
function gateSearchedProducts(product) {
    //do some database operations
    const myIndex = 3;
    return product[myIndex];
}
const getMoreSearchedProducts = (product) => {
    //do some database operations
    const myIndex = 4;
    return product[myIndex];
};
function another(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo,
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
