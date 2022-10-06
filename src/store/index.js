import Vue from "vue";
import Vuex from "vuex";

import tabs from "./modules/tabs";
import getters from "./getters";
import menu from './modules/menu'
import login from "./modules/login";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters,
  mutations: {
  },
  actions: {
  },
  modules: {
    tabs,
    menu,
    login
  },
});
