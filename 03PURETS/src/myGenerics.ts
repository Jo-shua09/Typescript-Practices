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
