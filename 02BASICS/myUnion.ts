let score: number | string = 33;

score = 77;
score = "88";

type User = { name: string; id: number };
type Admin = { username: string; id: number };

let joshua: User | Admin = { name: "hdeh", id: 2 };

joshua = { username: "hdsh", id: 33 };

// function getDbId(id: number | string) {
//   console.log(`gd hyd ${id}`);
// }
getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// ARRAYS

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", "3", true];

let seatAllotment: "aile" | "middle" | "window";

seatAllotment = "aile";
