<template>
  <div class="contact-info">
    <div class="icon-container">
      <span class="icon"><font-awesome-icon :icon="icon" /></span>
    </div>
    <p>{{ info }}</p>
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
</script>>

<style lang="scss" scoped>
.contact-info {
  color: red;
  border: 1px solid blue;
  margin: 1rem;
  padding: 1rem;
}
</style>>