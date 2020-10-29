<template>
  <div class="contact-info">
    <div class="icon-container">
      <span class="icon"><font-awesome-icon :icon="icon" /></span>
    </div>
    <p class="info-text">{{ info }}</p>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  props: ["icon", "info"],
  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
.contact-info {
  margin: 1rem;
  padding: 2rem 0;
  width: 80%;
  font-family: "Sriracha", cursive;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 2.5rem;
  }

  .info-text {
    margin-top: 0;
    text-align: center;
  }
}
</style>
