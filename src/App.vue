<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";

library.add(faPizzaSlice);

export default {
  components: {
    "app-header": Header,
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
