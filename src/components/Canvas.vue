<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import game from '@/phaser/Game';

@Component
export default class CanvasContainer extends Vue {
  canvas = 'canvas';

  @Prop() private msg!: string;

  mounted() {
    game(this.$el as HTMLElement);
  }

  render() {
    return <div id="canvas" data-canvas={ this.canvas }></div>;
  }
}
</script>

<style scoped lang="scss">
#canvas {
  background: black;
  grid-area: Canvas;
}
</style>
