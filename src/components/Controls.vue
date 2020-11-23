<template lang="pug">
  #controls
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Controls extends Vue {
}
</script>

<style scoped lang="scss">
#controls {
  background: blue;
  grid-area: Controls;
}
</style>
