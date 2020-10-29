<template>
  <div id="app">
    <app-header />
    <div id="app-body">
      <router-view />
    </div>
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
@import "./assets/scss/utilities.scss";

body {
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
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

#app-body {
  padding-top: 5rem;
}
</style>
