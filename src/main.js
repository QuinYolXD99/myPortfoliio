/* eslint-disable */
import Vue from 'vue';
import './plugins/base';
import App from './App.vue';
import store from './store';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.min.css';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import emmiter from './bus.js';
Vue.prototype.$emmiter = emmiter;
Vue.use(Vuetify, {
  theme: {
    primary: "#9c27b0",
    secondary: "#673ab7",
    accent: "#e91e63",
    error: "#f44336",
    warning: "#ff9800",
    info: "#00bcd4",
    success: "#4caf50",
    _secondary: "#424242",
    _accent: "#82B1FF"
  },
  iconfont: 'mdi'
});
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
