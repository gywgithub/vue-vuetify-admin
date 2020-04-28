import Vue from 'vue'
import Vuex from 'vuex'
// import { AlertModule } from './modules/alert'

Vue.use(Vuex)

export interface IRootState {
  // alert: AlertModule
}

export default new Vuex.Store<IRootState>({})
