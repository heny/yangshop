import Vue from 'vue'
import Vuex from 'vuex'
import actions from './Actions'
import getters from './Getters'
import mutations from './Mutations'
import state from './State'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})