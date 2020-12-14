<template lang="pug">
  #controls( v-if="phaserIsReady" )
    //- el-slider( v-model="alpha" :min="0" :max="1" :step="0.01")
    //- el-button( size="mini" @click="start" ) Start
    //- el-button( size="mini" @click="stop" ) Stop
    //- el-button( size="mini" @click="pause" ) Pause
    //- el-button( size="mini" @click="resume" ) Resume
    //- el-button( size="mini" @click="explode" ) Explode
    //- el-button( size="mini" @click="emit" ) Emit
    Active
    //- Wells
    //- el-button( @click="follow" ) Follow

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import Active from '@/components/controls/Active.vue';
import Wells from '@/components/controls/Wells.vue';

@Component({
  components: {
    Wells,
    Active,
  },
  computed: mapGetters(['phaserIsReady']),
})
export default class Controls extends Vue {
  alphaValue = 0.5;

  particlesQuantity = 100;

  phaserIsReady!: boolean;

  get alpha() {
    return this.alphaValue;
  }

  set alpha(value) {
    this.alphaValue = value;
    this.$emitter.setAlpha(value);
  }

  // to implement

  start() {
    this.$emitter.start();
  }

  stop() {
    this.$emitter.stop();
  }

  pause() {
    this.$emitter.pause();
  }

  resume() {
    this.$emitter.resume();
  }

  explode() {
    this.$emitter.explode(
      this.particlesQuantity,
      this.$sprite.x,
      this.$sprite.y,
    );
  }

  emit() {
    this.$emitter.emitParticle(
      this.particlesQuantity,
      this.$sprite.x,
      this.$sprite.y,
    );
  }
}
</script>

<style scoped lang="scss">
#controls {
  padding: 1rem;
  background: blue;
  grid-area: Controls;
}
</style>
