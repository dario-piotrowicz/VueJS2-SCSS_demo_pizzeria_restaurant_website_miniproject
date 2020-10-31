<template>
  <nav :class="navMenuClass">
    <div
      class="link"
      :class="{ 'router-link-exact-active': $route.path === '/' }"
    >
      <router-link to="/">Home</router-link>
    </div>
    <div
      class="link"
      :class="{ 'router-link-exact-active': $route.path === '/menu' }"
    >
      <router-link to="/menu">Menu</router-link>
    </div>
    <div
      class="link"
      :class="{ 'router-link-exact-active': $route.path === '/delivery' }"
    >
      <router-link to="/delivery">Delivery</router-link>
    </div>
    <div
      class="link"
      :class="{ 'router-link-exact-active': $route.path === '/about' }"
    >
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["smaller-menu"],
  computed: {
    ...mapState(["darkMode"]),
    navMenuClass: function () {
      let resultClass = "";
      if (this.darkMode) {
        resultClass += " dark-mode";
      }
      if (this.smallerMenu) {
        resultClass += " smaller-menu";
      } else {
        resultClass += " normal-menu";
      }
      return resultClass;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/constants.scss";
@import "./shared-styles.scss";
@import "./keyframe-animations.scss";

nav {
  display: flex;

  @media (max-width: 800px) {
    opacity: 0;
    width: 0;
    z-index: -1;
  }

  .link {
    padding: 1rem 0.5rem;
    &.router-link-exact-active {
      &::after {
        content: "";
        display: block;
        width: 80%;
        height: 2px;
        margin: auto;
        margin-top: 5px;
        background-color: $color-secondary;
        animation: link-underline 0.5s cubic-bezier(0, 0.8, 1, 0.85);
      }
      a {
        color: $color-secondary;
      }
    }

    a {
      color: $color-primary;
      margin: 1rem;
      font-size: 1.2rem;
      text-decoration: none;
      transition: 0.5s;

      &:hover {
        color: $color-secondary;
      }
    }
  }

  &.dark-mode {
    @include darkModeLinksColors();
  }
  &.normal-menu {
    @include normalMenuLink();
  }
  &.smaller-menu {
    @include smallerMenuLink();
  }
}
</style>>