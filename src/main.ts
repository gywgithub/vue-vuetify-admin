import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from '@/plugins/vuetify'
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.config.productionTip = false

// use mock data by default
require('./mock/index') // tslint:disable-line

Vue.use(vueAxios, axios)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
