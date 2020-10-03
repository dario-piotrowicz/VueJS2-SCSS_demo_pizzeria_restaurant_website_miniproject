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
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Hero from "../components/Hero";

export default {
  name: "Home",
  components: {
    hero: Hero,
    "font-awesome-icon": FontAwesomeIcon,
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
      font-size: 1.8rem;
    }

    &.info {
      font-size: 1.4rem;
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
      padding: 1rem;
      font-size: 2rem;
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
