interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}
interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  getReelTime() {
    throw new Error("Method not implemented.");
  }
  constructor(public cameraMode: string, public filter: string, public burst: number) {}
}

class Youtube implements TakePhoto, Story {
  constructor(public cameraMode: string, public filter: string, public burst: number, public short: string) {}
  getSepia(): void {
    throw new Error("Method not implemented.");
  }
  //     getReelTime(): number {
  //         throw new Error("Method not implemented.");
  //     }
  //   createStory(): void {
  //     console.log("story created");
  //   }
}
