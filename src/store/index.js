import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
    isLogged: false
  },
  getters: {
  },
  mutations: {
    SET_LOADING(state, status){
      state.isLoading = status;
    },

    SET_LOGGED(state, status){
      state.isLogged = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
