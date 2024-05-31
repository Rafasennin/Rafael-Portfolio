import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
    isLogged: false,
    isFetching: false
  },
  getters: {
  },
  mutations: {
    SET_LOADING(state, status){
      state.isLoading = status;
    },

    SET_LOGGED(state, status){
      state.isLogged = status;
    },

    SET_FETCHING(state, status){
      state.isFetching = status
    }
  },
  actions: {
  },
  modules: {
  }
})
