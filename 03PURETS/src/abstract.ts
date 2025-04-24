class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // COMPLEX CALCULATION
    return 8;
  }
}

class Instagramm extends TakePhoto {
  constructor(public cameraMode: string, public filter: string, public burst: number) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("sepia");
  }
}

const josh = new Instagram("test", "test", 3);
josh.getReelTime();
