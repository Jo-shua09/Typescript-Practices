function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean) {}

let login = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper("Joshua");
signUp("Joshua", "jon@gmail.com", false);
login("j", "j@.com");

// function getValue(myval: number) {
//   if (myVal > 5) {
//     return true;
//   }
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thors", "hawk"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(err: string): void {
  console.log(err);
}

function handleError(err: string): never {
  throw new Error(err);
}

export {};
