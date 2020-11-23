<template lang="pug">
  #code
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Code extends Vue {
}
</script>

<style scoped lang="scss">
#code {
  background: red;
  grid-area: Code;
}
</style>
