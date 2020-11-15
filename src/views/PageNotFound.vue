<template>
  <div id="page-not-found" class="page" v-darkmode>
    <h1>404 - Page Not Found</h1>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/constants.scss";

#page-not-found {
  height: calc(100vh - 346px);
  box-sizing: border-box;

  &.dark-mode {
    color: $dark-mode--color-primary;
  }
}
</style>