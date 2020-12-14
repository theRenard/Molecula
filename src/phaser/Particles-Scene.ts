import { Scene } from 'phaser';
import eventBus from '@/eventBus';

export default class ParticlesScene extends Scene {
  public particles!: Phaser.GameObjects.Particles.ParticleEmitterManager;

  public emitter!: Phaser.GameObjects.Particles.ParticleEmitter;

  public sprite!: Phaser.Physics.Arcade.Image;

  constructor() {
    super({
      key: 'Particles',
      active: true,
    });
  }

  preload() {
    this.load.setBaseURL('https://labs.phaser.io');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  create() {
    this.particles = this.add.particles('red');
    this.emitter = this.particles.createEmitter({ on: false });

    this.sprite = this.physics.add.image(400, 100, 'logo');
    this.sprite.setVelocity(100, 200);
    this.sprite.setBounce(1, 1);
    this.sprite.setCollideWorldBounds(true);

    this.emitter.startFollow(this.sprite);

    eventBus.$emit('phaser-ready');

    // this.scale.on("resize", (gameSize: any) => {});
  }
}
