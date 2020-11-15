<template>
  <div id="page-not-found" class="page" v-darkmode>
    <span class="icon"><font-awesome-icon icon="exclamation-triangle" /></span>
    <h1 class="text">404 - Page Not Found</h1>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/constants.scss";

#page-not-found {
  height: calc(100vh - 346px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 3rem;
  }

  .text {
    margin: 0;
    text-align: center;
  }

  &.dark-mode {
    color: $dark-mode--color-primary;
  }
}
</style>