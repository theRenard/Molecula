<template lang="pug">
  #canvas
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import startPhaser from "@/phaser/canvas";

@Component
export default class CanvasContainer extends Vue {
  @Prop() private msg!: string;

  mounted() {
    startPhaser(this.$el as HTMLElement);
  }
}
</script>

<style scoped lang="scss">
#canvas {
  background: black;
  grid-area: Canvas;
}
</style>
