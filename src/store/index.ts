import Vue from 'vue'
import Vuex from 'vuex'
import Alert from './modules/alert'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    alert: Alert
  }
})

export default store
