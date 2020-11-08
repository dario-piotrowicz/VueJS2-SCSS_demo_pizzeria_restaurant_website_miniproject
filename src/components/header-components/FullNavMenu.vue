<template>
  <nav :class="navMenuClass" v-darkmode>
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
export default {
  data: function () {
    return {
      menuHasBeenSmaller: false,
    };
  },
  props: ["smaller-menu"],
  computed: {
    navMenuClass: function () {
      let resultClass = "";
      if (this.smallerMenu) {
        resultClass += " smaller-menu";
      } else if (this.menuHasBeenSmaller) {
        resultClass += " normal-menu";
      }
      return resultClass;
    },
  },
  watch: {
    smallerMenu: function (newValue) {
      if (newValue) {
        this.menuHasBeenSmaller = true;
      }
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
    .link {
      &.router-link-exact-active {
        &::after {
          background-color: $dark-mode--color-secondary;
        }
        a {
          color: $dark-mode--color-secondary;
        }
      }
      a {
        color: $dark-mode--color-primary;

        &:hover {
          color: $dark-mode--color-secondary;
        }
      }
    }
  }
  &.normal-menu {
    @include normalMenuLink();
  }
  &.smaller-menu {
    @include smallerMenuLink();
  }
}
</style
>>
