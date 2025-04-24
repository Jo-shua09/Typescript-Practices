// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Lagos";

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const joshua = new User("h@gmail", "joshua");
// // joshua.city = "Lagos";
class User {
  protected _courseCount = 1;

  readonly city: string = "Lagos";
  constructor(public email: string, public name: string, private userId: string) {}
  private deleteToken() {
    console.log("token deleted");
  }

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const joshua = new User("h@gmail", "joshua", "hello");
// joshua.city = "Lagos";
