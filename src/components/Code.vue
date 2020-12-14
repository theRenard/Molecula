<template lang="pug">
  #code
    pre {{ emitterJSON }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: mapGetters(['emitterJSON']),
})
export default class Code extends Vue {
  emitterJSON!: string;
}
</script>

<style scoped lang="scss">
#code {
  background: red;
  grid-area: Code;
  overflow-y: scroll;
  padding: 1rem;
}
</style>
