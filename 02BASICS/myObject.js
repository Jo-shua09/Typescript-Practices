"use strict";
// const user = {
//   name: "Joshua",
//   email: "j@gmail.com",
//   isActive: true,
// };
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
  _id: "111",
  name: "h",
  email: "hhdhd",
  isActive: false,
};

type cardNumber = {
  cardnumber: String,
};

type cardDate = {
  cardDate: String,
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number,
  };

myUser.email = "dhhdhd";
// myUser._id = "hhdhd";
