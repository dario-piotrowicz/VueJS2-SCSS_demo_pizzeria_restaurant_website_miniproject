<template>
  <div class="home">
    <hero>
      <div class="hero-content">
        <img src="../assets/images/logo.png" />
        <h2 class="heading">True Italian Taste</h2>
        <div class="decorated-orizontal-line">
          <div class="line"></div>
          <span class="icon"><font-awesome-icon icon="pizza-slice" /></span>
          <div class="line"></div>
        </div>
        <h2 class="opening-times">Opening Times</h2>
        <h2 class="info">Lunch: 11:00 - 16:00</h2>
        <h2 class="info">Dinner: 19:00 - 23:30</h2>
        <h2 class="info">Closed on Tuesdays</h2>
      </div>
    </hero>
    <generic-info-card
      :imageSrc="require('../assets/images/generic-info-1.jpg')"
      title="TITLE"
      description="description Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat neque odio, illo alias sed, assumenda accusantium debitis sequi
        harum inventore autem, quas explicabo. Cupiditate, ratione dolore.
        Eligendi iste ex non!"
      ><button>Extra Content HERE</button></generic-info-card
    >
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Hero from "../components/Hero";
import GenericInfoCard from "../components/GenericInfoCard";

export default {
  name: "Home",
  components: {
    hero: Hero,
    "font-awesome-icon": FontAwesomeIcon,
    "generic-info-card": GenericInfoCard,
  },
};
</script>

<style lang="scss" scoped>
.hero-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 0.5rem;

    &.heading {
      font-family: "Italianno", cursive;
      font-size: 2.3rem;
      font-weight: 100;
    }

    &.opening-times {
      margin-top: 1rem;
      font-size: 1.8rem;
    }

    &.info {
      font-size: 1.4rem;
      font-weight: 100;
      margin: 0 1rem;
    }
  }

  img {
    width: 60%;
  }

  .decorated-orizontal-line {
    display: flex;
    width: 40%;
    align-items: center;

    .icon {
      padding: 0 1rem;
      font-size: 1.5rem;
      transform: rotate(-45deg);
    }

    .line {
      margin: 10px 0;
      height: 2px;
      width: 40%;
      background-color: #fff;
    }
  }
}
</style>
