import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false
  },
  getters: {
  },
  mutations: {
    SET_LOADING(state, status){
      state.isLoading = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
