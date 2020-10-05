<template>
  <div id="menu">
    <div class="centering-container">
      <h1 class="title">Menu</h1>
      <section>
        <h2 class="section-title">Classic Pizzas</h2>
        <div class="menu-items-container">
          <menu-item
            v-for="pizza of classicPizzas"
            :key="pizza.id"
            :name="pizza.name"
            :imageSrc="pizza.imageSrc"
            :price="pizza.price"
            :description="pizza.description"
          />
        </div>
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
  data: function () {
    return {
      classicPizzas: [
        {
          id: "margherita",
          name: "Margherita",
          imageSrc: require("../assets/images/menu/margherita.jpg"),
          price: 10,
          description:
            "The most classic Neapolitan pizza, made with tomatoes sauce, mozzarella cheese and a touch of fresh basil.",
        },
        {
          name: "Pepperoni",
          imageSrc: require("../assets/images/menu/pepperoni.jpg"),
          price: 12,
          description:
            "One of the most popular pizza, made with a standard base of tomatoes sauce and mozzarella, and completed by slices of delicious pepperoni.",
        },
        {
          name: "Quattro Formaggi",
          imageSrc: require("../assets/images/menu/quattro-formaggi.jpg"),
          price: 12,
          description:
            "Quattro formaggi in italian literally means 'four cheeses'. Those are places on top of the standard pizza base and comprise of Mozzarella, Gorgonzola, Fontina and Parmigiano.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#menu {
  padding: 0 2rem;
}

.title {
  text-align: center;
}

.section-title {
  margin-bottom: 0;
}

.menu-items-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  & > * {
    margin: 2rem;
    flex-shrink: 0;
  }
}
</style>