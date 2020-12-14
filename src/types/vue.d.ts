import Vue from "vue";
import Phaser from "phaser";
import ParticleScene from "@/phaser/Particles-Scene";

declare module "vue/types/vue" {
  interface Vue {
    $game: Phaser.Game;
    $scene: ParticleScene;
    $particles: Phaser.GameObjects.Particles.ParticleEmitterManager;
    $emitter: Phaser.GameObjects.Particles.ParticleEmitter;
    $sprite: Phaser.Physics.Arcade.Image;
  }
}
