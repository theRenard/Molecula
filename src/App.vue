<template>
  <div id="app" class="grid-container">
    <CanvasContainer />
    <Controls />
    <Code />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import eventBus from '@/eventBus';
import ParticlesScene from '@/phaser/Particles-Scene';
import CanvasContainer from './components/Canvas.vue';
import Controls from './components/Controls.vue';
import Code from './components/Code.vue';

@Component({
  components: {
    CanvasContainer,
    Controls,
    Code,
  },
})
export default class App extends Vue {
  mounted() {
    eventBus.$on('phaser-ready', () => {
      Vue.prototype.$scene = this.$game.scene.getScene(
        'Particles',
      ) as ParticlesScene;
      Vue.prototype.$particles = this.$scene.particles;
      Vue.prototype.$emitter = this.$scene.emitter;
      Vue.prototype.$sprite = this.$scene.sprite;
      this.$store.commit('PHASER_IS_READY', true);
      this.$store.commit('GENERATE_EMITTER_JSON');
      this.$emitter.start();
      console.log(Object.getOwnPropertyNames(this.$scene.emitter));
    });
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 500px;
  grid-template-rows: 1fr 1fr 500px;
  gap: 0px 0px;
  grid-template-areas:
    "Canvas Canvas Canvas Controls"
    "Canvas Canvas Canvas Controls"
    "Canvas Canvas Canvas Code";
}
</style>
