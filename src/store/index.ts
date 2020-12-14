import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phaserIsReady: false,
    emitterJSON: 'empty',
  },
  getters: {
    phaserIsReady: (state) => state.phaserIsReady,
    emitterJSON: (state) => state.emitterJSON,
  },
  mutations: {
    PHASER_IS_READY(state, value: boolean) {
      state.phaserIsReady = value;
    },
    GENERATE_EMITTER_JSON(state) {
      // eslint-disable-next-line no-underscore-dangle
      const vm = this._vm;
      const { $emitter } = vm as unknown as Vue;
      state.emitterJSON = JSON.stringify($emitter.toJSON(), null, 2);
    },
  },
  actions: {},
  modules: {},
});
