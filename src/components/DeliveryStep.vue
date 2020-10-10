<template>
  <section class="delivery-step">
    <div class="icon-container">
      <span class="icon"><font-awesome-icon :icon="icon" /></span>
    </div>
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  props: ["icon"],
  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
.delivery-step {
  display: flex;
  justify-content: center;
  align-items: center;

  & > .icon-container {
    color: rgb(223, 91, 4);
    background-color: rgb(235, 209, 62);
    padding: 2rem;
    margin: 2rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 15px solid rgb(70, 22, 22);
    border-radius: 50%;
    font-size: 4rem;
  }

  & > .content {
    width: 20rem;
  }
}
</style>