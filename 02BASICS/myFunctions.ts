function addTwo(num: number) {
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

export {};
