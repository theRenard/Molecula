<template lang="pug">
  #canvas
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import game from "@/phaser/Game";

@Component
export default class CanvasContainer extends Vue {
  @Prop() private msg!: string;

  mounted() {
    game(this.$el as HTMLElement);
  }
}
</script>

<style scoped lang="scss">
#canvas {
  background: black;
  grid-area: Canvas;
}
</style>
