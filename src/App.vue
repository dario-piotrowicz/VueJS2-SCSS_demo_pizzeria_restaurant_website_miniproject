<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTripadvisor,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Header from "./components/Header";
import Footer from "./components/Footer";

library.add(faPizzaSlice, faFacebookF, faTripadvisor, faGithub);

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

.centering-container {
  max-width: 1100px;
  margin: auto;
}
</style>
