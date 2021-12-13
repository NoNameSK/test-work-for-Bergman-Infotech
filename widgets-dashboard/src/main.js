import Vue from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import HighchartsVue from 'highcharts-vue';
import VueRx from 'vue-rx';

Vue.use(HighchartsVue, VueRx);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
