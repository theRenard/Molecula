import Phaser from "phaser";
import Particles from "@/phaser/Particles-Scene";
import Vue from "vue";

declare const process: {
  env: {
    NODE_ENV: string;
  };
};

type extraConfig = {
  pixelArt: boolean;
};

const config: Phaser.Types.Core.GameConfig & extraConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE
  },
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: process.env.NODE_ENV === "development"
    }
  },
  scene: [Particles]
};

export default (parent: HTMLElement): Phaser.Game => {
  const game = new Phaser.Game({ ...config, parent });
  Vue.prototype.$game = game;
  Vue.prototype.$scene = game.scene.getScene("Particles");
  return game;
};
