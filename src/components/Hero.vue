<template>
  <div class="hero">
    <div class="centering-container content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  backgroundSrc: "../assets/images/home-hero.jpg",
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../assets/images/home-hero.jpg") no-repeat left center/cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    color: white;
    z-index: 1;
  }

  &::before {
    content: "";
    background-color: #000;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
}
</style>>
