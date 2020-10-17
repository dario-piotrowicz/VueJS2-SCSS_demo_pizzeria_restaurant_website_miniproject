import Vue from "vue";
import Vuex from "vuex";

import menuData from "./menuData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    location: "Pizzas Rd, Somewhere , 12 - P1ZZ4 United Kingdom",
    phoneNumber: "+12 3456 7891011",
    email: "dariospizzas@fakeemail.com",
    menuSections: menuData.menuSections,
  },
  mutations: {},
  actions: {},
  modules: {},
});
