import { Scene } from "phaser";
import eventBus from "@/eventBus";

export default class ParticlesScene extends Scene {
  public particles?: Phaser.GameObjects.Particles.ParticleEmitterManager;
  public emitter?: Phaser.GameObjects.Particles.ParticleEmitter;

  constructor() {
    super({
      key: "Particles",
      active: true
    });
  }

  preload() {
    this.load.setBaseURL("https://labs.phaser.io");
    this.load.image("logo", "assets/sprites/phaser3-logo.png");
    this.load.image("red", "assets/particles/red.png");
  }

  create() {
    this.particles = this.add.particles("red");
    this.emitter = this.particles.createEmitter({});

    const logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    this.emitter.startFollow(logo);

    eventBus.$emit("phaser-ready");

    // this.scale.on("resize", (gameSize: any) => {});
  }
}
