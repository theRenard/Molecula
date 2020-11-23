<template>
  <div id="app" class="grid-container">
    <CanvasContainer msg="Welcome to Your Vue.js + TypeScript App" />
    <Controls />
    <Code />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CanvasContainer from "./components/Canvas.vue";
import Controls from "./components/Controls.vue";
import Code from "./components/Code.vue";

@Component({
  components: {
    CanvasContainer,
    Controls,
    Code
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  width: 100vw;
  height: 100vh;
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
