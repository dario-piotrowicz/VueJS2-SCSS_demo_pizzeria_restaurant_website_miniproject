<template>
  <div
    class="generic-info-card centering-container"
    :class="{
      'image-on-the-right': !!imageOnTheRight,
      'dark-mode': !!darkMode,
    }"
  >
    <img :src="imageSrc" />
    <section class="content">
      <h2 class="title">{{ title }}</h2>
      <p class="description">
        {{ description }}
      </p>
      <slot></slot>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["imageSrc", "title", "description", "imageOnTheRight"],
  computed: {
    ...mapGetters(["darkMode"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/constants.scss";

.generic-info-card {
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: transparentize(#fff, 0.2);
  border-radius: 10px;

  &.dark-mode {
    background-color: transparentize($dark-mode--neutral-background, 0.2);
    color: $dark-mode--color-primary;
    border: 1px solid transparentize($dark-mode--color-primary, 0.5);

    & > .content {
      & > .title {
        color: $dark-mode--color-secondary;
      }
    }
  }

  &.image-on-the-right {
    flex-direction: row-reverse;
  }

  & > img,
  & > .content {
    width: 50%;
    flex: 1;
    margin: 0.5rem;
  }

  & > img {
    object-fit: cover;
    border-radius: 10px;
  }

  & > .content {
    padding: 2rem;
    & > .title {
      margin-top: 0;
      color: $color-secondary;
    }

    & > .description {
      line-height: 2.5;
    }
  }
}

@media (max-width: 950px) {
  .generic-info-card {
    flex-direction: column;
    text-align: center;

    &.image-on-the-right {
      flex-direction: column;
    }

    & > img {
      width: 90%;
      flex-basis: 0;
      height: 130px;
      object-position: center;
    }

    & > .content {
      width: 70%;
    }
  }
}
</style>
