<template>
  <div id="delivery">
    <div class="centering-container">
      <h1 class="title">Delivery</h1>
      <delivery-step icon="clipboard-list">
        <div>
          <span>Choose from out </span
          ><router-link to="/menu">Menu</router-link>
        </div>
      </delivery-step>
      <delivery-step icon="dollar-sign">
        <div>
          <p>Note that our delivery fee is 15$</p>
          <p>(30$ for more then 10 pizzas)</p>
        </div>
      </delivery-step>
      <delivery-step icon="map-signs">
        <p>And that we deliver in a 5 miles range from our location</p>
        <p>( Pizzas Rd, Somewhere , 12 - P1ZZ4 United Kingdom )</p>
      </delivery-step>
      <delivery-step icon="phone-alt">
        <p>Call us at +12 3456 7891011 and place your order</p>
      </delivery-step>
      <delivery-step icon="pizza-slice">
        <p>Receive and pay for your pizzas</p>
        <p>(we accept either cash or card)</p>
      </delivery-step>
    </div>
  </div>
</template>

<script>
import DeliveryStep from "../components/DeliveryStep";
export default {
  components: {
    "delivery-step": DeliveryStep,
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 2.2rem;
}
</style>>
