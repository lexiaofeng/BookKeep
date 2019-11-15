import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jq from './assets/jquery'

import axios from 'axios'
import domain from './domain.js';

import { Button } from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';
global.domain = domain;
Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Dialog);

new Vue({
  router,
  store,
  // Dialog,
  jq,
  render: h => h(App)
}).$mount('#app')
