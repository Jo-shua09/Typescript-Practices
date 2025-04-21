// const user: (string | number)[] = ["hc", 1];
let tUser: [string, number, boolean];

tUser = ["hc", 1, true];

let rgb: [number, number, number] = [22, 22, 22];

type User = [number, string];

const newUser: User = [111, "email"];

newUser[1] = "hhh";
// newUser.push(true);

export {};
