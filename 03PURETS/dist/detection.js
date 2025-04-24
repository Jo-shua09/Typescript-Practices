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
