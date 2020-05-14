import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    daysArr: []
  },
  mutations: {
    SET_DAYS: (state, days) => {
      state.daysArr = days;
    }
  },
  actions: {
    GET_DAYS({commit}, days) {
      console.log(1)
      commit('SET_DAYS', days)
    }
    GET_DATA ({commit}) {
      return fetch(url)
          .then((res) => {
            console.log(res)
            return res.json()
          })
          .then((res) => {
            console.log(res)
            commit('MUTATION', res.data)
          })
    }
  }
})
