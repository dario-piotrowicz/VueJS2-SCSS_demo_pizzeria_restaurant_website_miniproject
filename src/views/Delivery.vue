<template>
  <div id="delivery" class="page" v-darkmode>
    <div class="centering-container">
      <h1 class="page-title">Delivery</h1>
      <p class="intro-text">To order our pizzas for delivery...</p>
      <div id="delivery-steps-container">
        <delivery-step icon="clipboard-list">
          <div class="delivery-step-content">
            <span>Choose from our </span
            ><router-link to="/menu">Menu</router-link>
          </div>
        </delivery-step>
        <div class="delivery-steps-divider" />
        <delivery-step icon="dollar-sign">
          <div class="delivery-step-content">
            <p>Note that our delivery fee is 15$</p>
            <p class="details">(30$ for more then 10 pizzas)</p>
          </div>
        </delivery-step>
        <div class="delivery-steps-divider" />
        <delivery-step icon="map-signs">
          <div class="delivery-step-content">
            <p>And that we deliver in a 5 miles range from our location</p>
            <p class="details">( {{ location }} )</p>
          </div>
        </delivery-step>
        <div class="delivery-steps-divider" />
        <delivery-step icon="phone-alt">
          <div class="delivery-step-content">
            <p>Call us at {{ phoneNumber }} and place your order</p>
          </div>
        </delivery-step>
        <div class="delivery-steps-divider" />
        <delivery-step icon="pizza-slice">
          <div class="delivery-step-content">
            <p>Receive and pay for your pizzas</p>
            <p class="details">(we accept either cash or card)</p>
          </div>
        </delivery-step>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DeliveryStep from "../components/DeliveryStep";

export default {
  components: {
    "delivery-step": DeliveryStep,
  },
  computed: {
    ...mapState(["location", "phoneNumber"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/constants.scss";

.intro-text,
.delivery-step-content {
  font-size: 1.7rem;
  text-align: center;
  font-family: "Sriracha", cursive;
  line-height: 1.2;
}

.delivery-step-content {
  a {
    text-decoration: none;
    color: $color-primary;
    transition: 0.5s;
    &:hover {
      color: $color-secondary;
    }
  }

  .details {
    font-size: 1.2rem;
    font-family: "Source Sans Pro", sans-serif;
  }
}

#delivery-steps-container {
  margin-top: 5rem;
  margin-bottom: 5rem;

  .delivery-steps-divider {
    height: 10rem;
    width: 0.5rem;
    margin: 3rem auto;
    background-color: $color-primary;
    border-radius: 5px;
  }
}

#delivery.page.dark-mode {
  .intro-text,
  .delivery-step-content {
    color: $dark-mode--color-secondary;
  }

  #delivery-steps-container {
    .delivery-step-content {
      a {
        color: #b76f4d;
        &:hover {
          color: $dark-mode--color-secondary;
        }
      }
    }

    .delivery-steps-divider {
      background-color: #ffc17587;
    }
  }
}
</style>
