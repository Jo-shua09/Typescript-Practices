"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
detectType(5);
console.log(detectType);
function provideId(id) {
    if (!id) {
        console.log("give me an ID");
    }
    id === null || id === void 0 ? void 0 : id.toLowerCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Foood";
    }
    else {
        pet;
        return "Bird Foood";
    }
}
