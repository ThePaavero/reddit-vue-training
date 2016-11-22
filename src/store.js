import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  items: null
}

const mutations = {
  setItems(state, items) {
    state.items = items
  }
}

export default new Vuex.Store({
  state,
  mutations
})
