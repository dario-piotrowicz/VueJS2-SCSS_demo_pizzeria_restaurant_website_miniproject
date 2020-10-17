<template>
  <div class="page" id="menu">
    <div class="centering-container">
      <h1 class="page-title">Menu</h1>
      <menu-section
        v-for="section of menuSections"
        :key="section.title"
        :title="section.title"
        :items="section.items"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MenuSection from "../components/MenuSection";

export default {
  components: {
    "menu-section": MenuSection,
  },
  computed: {
    ...mapState(["menuSections"]),
  },
};
</script>

<style lang="scss" scoped>
#menu {
  section.menu-section:first-of-type {
    margin-top: 3.5rem;
  }
}
</style>