"use strict";
class Instagram {
    getReelTime() {
        throw new Error("Method not implemented.");
    }
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    getSepia() {
        throw new Error("Method not implemented.");
    }
}
