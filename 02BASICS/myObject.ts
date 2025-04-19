// const user = {
//   name: "Joshua",
//   email: "j@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "joshua", isPaid: false, email: "j@.com" };
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "react", price: 444 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "111",
  name: "h",
  email: "hhdhd",
  isActive: false,
};

myUser.email = "dhhdhd";
// myUser._id = "hhdhd";

export {};
