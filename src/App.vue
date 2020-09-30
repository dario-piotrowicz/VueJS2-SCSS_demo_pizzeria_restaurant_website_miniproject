<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import "./fontAwesomeSetup";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
