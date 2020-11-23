import { Scene } from "phaser";

export default class Intro extends Scene {
  constructor() {
    super({
      key: "particles",
      active: true
    });
  }
  preload() {
    this.load.setBaseURL("http://labs.phaser.io");
    this.load.image("logo", "assets/sprites/phaser3-logo.png");
    this.load.image("red", "assets/particles/red.png");
  }
  create() {
    const particles = this.add.particles("red");

    const emitter = particles.createEmitter({});

    const logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

    // this.scale.on("resize", (gameSize: any) => {});
  }
}
