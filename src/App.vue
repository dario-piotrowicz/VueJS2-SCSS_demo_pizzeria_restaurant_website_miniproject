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

h1,
h2,
h3,
h4,
h5,
h6,
a {
  font-family: "Sriracha", cursive;
}

.centering-container {
  max-width: 1100px;
  margin: auto;
}

.btn {
  text-decoration: none;
  color: rgb(223, 91, 4);
  background-color: rgb(31, 15, 15);
  display: inline-block;
  padding: 0.5rem;
  border-radius: 5px;
  transition: color 0.25s, background-color 0.25s;

  &:hover {
    color: rgb(31, 15, 15);
    background-color: rgb(223, 91, 4);
  }
}
</style>
