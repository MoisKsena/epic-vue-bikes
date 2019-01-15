import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: []
  },
  mutations: {
    GET_DATA(state, data) {
      state.cards = data
    }
  },
  actions: {  
    GET_DATA({ commit }) {

      axios.get('https://api.myjson.com/bins/14q146')
        .then(function (response) {
          // handle success
         /* console.log(response.request.response);*/
          commit('GET_DATA', response.data.goods);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  }
})
