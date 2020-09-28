<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";

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
