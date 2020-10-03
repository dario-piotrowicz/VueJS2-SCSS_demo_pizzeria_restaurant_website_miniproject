<template>
  <div class="menu">
    <div class="centering-container">
      <h1>Menu</h1>
      <section>
        <h2>Classic Pizzas</h2>
        <menu-item
          name="Margherita"
          :imageSrc="require('../assets/images/info-generic-pizza.jpg')"
          :price="10"
          description="The most classic Neapolitan pizza, made with tomatoes sauce, mozzarella cheese and a touch of fresh basil."
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