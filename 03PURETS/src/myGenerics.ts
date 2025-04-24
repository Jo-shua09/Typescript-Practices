const score: Array<number> = [];
const names: Array<string> = [];

function identity1(val: boolean | number): boolean | number {
  return val;
}

function identity2(val: any): any {
  return val;
}

function identity3<Type>(val: Type): Type {
  return val;
}

// identity3("josh");

function identity4<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identity4<Bottle>({
  brand: "",
  type: 0,
});

function gateSearchedProducts<T>(product: T[]): T {
  //do some database operations
  const myIndex = 3;
  return product[myIndex];
}

const getMoreSearchedProducts = <T>(product: T[]): T => {
  //do some database operations
  const myIndex = 4;
  return product[myIndex];
};

interface Database {
  conection: string;
  username: string;
  password: string;
}

function another<T, U extends Database>(valueOne: T, valueTwo: U): object {
  return {
    valueOne,
    valueTwo,
  };
}

// another(3, {});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
