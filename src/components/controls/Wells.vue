<template lang="pug">
  .gravity-wells
    .gravity-well( v-for="well in wells" )
    el-button( size="mini" @click="addWell" ) add Well
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Wells extends Vue {
  wells: Phaser.GameObjects.Particles.GravityWell[] = [];

  addWell() {
    const well = this.$particles.createGravityWell({
      x: 100,
      y: 100,
      power: 50,
      gravity: 50,
    });
    this.wells.push(well);
    console.log(this.wells);
  }
}
</script>

<style scoped lang="scss">
#code {
  background: red;
  grid-area: Code;
}
</style>
