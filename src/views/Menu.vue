<template>
  <div class="menu">
    <div class="centering-container">
      <h1>Menu</h1>
      <section>
        <h2>Classic Pizzas</h2>
        <menu-item
          name="Margerita"
          :imageSrc="require('../assets/images/info-generic-pizza.jpg')"
          :price="10"
        />
      </section>
    </div>
  </div>
</template>

<script>
import MenuItem from "../components/MenuItem";
export default {
  components: {
    "menu-item": MenuItem,
  },
};
</script>

<style lang="scss" scoped>
</style>