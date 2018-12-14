import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './src/App.vue';

import './src/global.css';

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
}).$mount('body');
