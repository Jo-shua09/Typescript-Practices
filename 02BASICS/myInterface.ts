interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ra" | "learn";
}

const josh: Admin = {
  dbId: 222,
  email: "email",
  userId: 22,
  startTrial: () => {
    return "started";
  },
  getCoupon: (name: "hover", off: 22) => {
    return 22;
  },
  githubToken: "github",
};

josh.email = "";
// josh.dbId = 228;
