<template>
  <div class="page" id="menu">
    <div class="centering-container">
      <h1 class="page-title">Menu</h1>
      <menu-section title="Classic Pizzas" :items="classicPizzas" />
      <menu-section title="Calzones" :items="calzones" />
      <menu-section title="Breads" :items="breads" />
    </div>
  </div>
</template>

<script>
import MenuSection from "../components/MenuSection";

export default {
  components: {
    "menu-section": MenuSection,
  },
  computed: {
    classicPizzas: function () {
      return this.$store.state.menuData.classicPizzas;
    },
    calzones: function () {
      return this.$store.state.menuData.calzones;
    },
    breads: function () {
      return this.$store.state.menuData.breads;
    },
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