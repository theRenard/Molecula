<template lang="pug">
  #controls( v-if="phaserReady" )
    el-slider( v-model="alpha" :min="0" :max="1" :step="0.01")

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import eventBus from "@/eventBus";
import ParticlesScene from "@/phaser/Particles-Scene";

let emitter: undefined | Phaser.GameObjects.Particles.ParticleEmitter;

@Component
export default class Controls extends Vue {
  phaserReady = false || Boolean(this.$scene);
  alphaValue = 0.5;

  get alpha() {
    return this.alphaValue;
  }

  set alpha(value) {
    this.alphaValue = value;
    emitter?.setAlpha(value);
  }

  beforeMount() {
    eventBus.$on("phaser-ready", () => {
      this.$scene = this.$game.scene.getScene("Particles") as ParticlesScene;
      emitter = this.$scene.emitter;
      this.phaserReady = true;
    });
  }
}
</script>

<style scoped lang="scss">
#controls {
  background: blue;
  grid-area: Controls;
}
</style>
