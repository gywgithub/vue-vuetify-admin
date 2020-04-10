import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from '@/plugins/vuetify';
import axios from 'axios';
import vueAxios from 'vue-axios';

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  // require('./mock/index'); // tslint:disable-line
  // import './mock/mock'
  // import mock = require('../mock/mock');
}

Vue.use(vueAxios, axios);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
