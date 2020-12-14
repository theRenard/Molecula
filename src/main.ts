import Vue from 'vue';
import App from '@/App.vue';
import ElementUI from 'element-ui';
import '@/scss/element-variables.scss';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
