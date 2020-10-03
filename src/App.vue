<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import "./assets/fonts/fonts.css";
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
  font-family: "Source Sans Pro", sans-serif;
}

.centering-container {
  max-width: 1100px;
  margin: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
a {
  font-family: "Sriracha", cursive;
}
</style>
