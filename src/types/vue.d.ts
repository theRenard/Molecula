import Vue from "vue";
import Phaser from "phaser";
import ParticleScene from "@/phaser/Particles-Scene";

declare module "vue/types/vue" {
  interface Vue {
    $game: Phaser.Game;
    $scene: ParticleScene;
  }
}
