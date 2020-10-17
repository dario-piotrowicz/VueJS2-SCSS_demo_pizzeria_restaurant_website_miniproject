import Vue from "vue";
import Vuex from "vuex";

import menuData from "./menuData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuSections: menuData.menuSections,
  },
  mutations: {},
  actions: {},
  modules: {},
});
