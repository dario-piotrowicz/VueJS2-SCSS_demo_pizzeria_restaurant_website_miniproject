<template>
  <div class="menu">
    <div class="centering-container">
      <h1>Menu</h1>
      <section>
        <h2>Classic Pizzas</h2>
        <menu-item
          name="Margherita"
          :imageSrc="require('../assets/images/menu/margherita.jpg')"
          :price="10"
          description="The most classic Neapolitan pizza, made with tomatoes sauce, mozzarella cheese and a touch of fresh basil."
        />
        <menu-item
          name="Pepperoni"
          :imageSrc="require('../assets/images/menu/pepperoni.jpg')"
          :price="12"
          description="One of the most popular pizza, made with a standard base of tomatoes sauce and mozzarella, and completed by slices of delicious pepperoni."
        />
        <menu-item
          name="Quattro Formaggi"
          :imageSrc="require('../assets/images/menu/quattro-formaggi.jpg')"
          :price="12"
          description="Quattro formaggi in italian literally means 'four cheeses'. Those are places on top of the standard pizza base and comprise of Mozzarella, Gorgonzola, Fontina and Parmigiano."
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