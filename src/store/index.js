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
    lunchOpeningHours: "11:00 - 16:00",
    dinnerOpeningHours: "19:00 - 23:30",
    daysOfWeekWhenClosed: ["tuesday"],
    darkMode: false,
  },
  mutations: {
    set_darkMode: function(state, value) {
      state.darkMode = value;
    },
  },
  actions: {},
  modules: {},
});
