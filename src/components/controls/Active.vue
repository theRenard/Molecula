<template lang="pug">
  .active
    el-switch(
      style="display: block"
      v-model="active"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="true"
      inactive-text="false")

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: mapGetters(['emitterJSON']),
})
export default class Active extends Vue {
  value = false;

  get active() {
    return this.value;
  }

  set active(value) {
    this.value = value;
    this.$store.commit('GENERATE_EMITTER_JSON');
  }
}
</script>

<style scoped lang="scss"></style>
