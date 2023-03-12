import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import actionUrl from '../models/actionUrl';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    article:[],
    isLoading: false,
  },
  getters: {
    isLoading: state => {
      return state.isLoading;
    },
    filterSlice: state => {
      return state.article.slice(0, 3)
    }
  },
  mutations: {
    SET_ARTICLE (state, article) {
      state.article = article
    },
    SET_LOADING(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    async loadArticle({commit}) {
      commit('SET_LOADING', true)
      let response = await axios.get(actionUrl.ARTICLE_LIST);
      if (response.status === 200) {
        commit('SET_ARTICLE', response.data);
        commit('SET_LOADING', false);
      }
    },
  },
  modules: {
  }
})
