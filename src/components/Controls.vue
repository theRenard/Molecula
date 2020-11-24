<template lang="pug">
  #controls( v-if="phaserReady" )
    el-slider( v-model="alpha" :min="0" :max="1" :step="0.01")

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import eventBus from "@/eventBus";
import ParticlesScene from "@/phaser/Particles-Scene";

@Component
export default class Controls extends Vue {
  alphaValue = 0.5;
  phaserReady = false || Boolean(this.$scene);

  get alpha() {
    return this.alphaValue;
  }

  set alpha(value) {
    this.alphaValue = value;
    this.$scene.emitter?.setAlpha(value);
  }

  mounted() {
    console.log('here');
    eventBus.$on("phaser-ready", () => {
      this.$scene = this.$game.scene.getScene("Particles") as ParticlesScene;
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
