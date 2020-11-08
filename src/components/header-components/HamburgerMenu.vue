<template>
  <div class="hamburger-menu" :class="hamburgerMenuClass">
    <input
      type="checkbox"
      class="hidden-checkbox"
      v-model="hamburgerMenuOpen"
    />
    <div class="hamburger-icon">
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
    <div class="nav-container">
      <nav>
        <router-link
          to="/"
          class="link"
          :class="{ 'router-link-exact-active': $route.path === '/' }"
          >Home</router-link
        >
        <router-link
          class="link"
          :class="{ 'router-link-exact-active': $route.path === '/menu' }"
          to="/menu"
          >Menu</router-link
        >
        <router-link
          to="/delivery"
          class="link"
          :class="{
            'router-link-exact-active': $route.path === '/delivery',
          }"
        >
          Delivery</router-link
        >
        <router-link
          to="/about"
          class="link"
          :class="{
            'router-link-exact-active': $route.path === '/about',
          }"
        >
          About</router-link
        >
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["smallerMenu"],
  data: function () {
    return {
      hamburgerMenuOpen: false,
      menuHasBeenSmaller: false,
    };
  },
  computed: {
    ...mapGetters(["darkMode"]),
    hamburgerMenuClass: function () {
      let resultClass = "";
      if (this.darkMode) {
        resultClass += " dark-mode";
      }
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
    $route: function () {
      this.hamburgerMenuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/constants.scss";

.hamburger-menu {
  position: relative;
  height: 60px;
  width: 60px;
  padding: 10px;
  box-sizing: border-box;

  &.normal-menu {
    animation: normal-header-animation-hamburger 0.5s ease-in-out forwards;
    .link {
      animation: normal-header-animation-hamburger-menu-link 0.5s ease-in-out
        forwards;
    }
  }

  @media (min-width: 799px) {
    opacity: 0;
    width: 0;
    z-index: -1;
  }

  &.smaller-menu {
    animation: smaller-header-animation-hamburger 0.5s ease-in-out forwards;

    .hamburger-icon .line {
      width: 70%;
      height: 3px;
      margin: 2px;
    }
    .hidden-checkbox:checked ~ .nav-container {
      height: 9.3rem;
    }
    .link {
      animation: smaller-header-animation-hamburger-menu-link 0.5s ease-in-out
        forwards;
    }
  }

  &.dark-mode {
    .nav-container {
      border-color: $dark-mode--color-primary;
      background-color: $dark-mode--neutral-background;
      nav > .link.router-link-exact-active {
        background-color: transparentize($dark-mode--color-primary, 0.9);
      }
    }

    .link {
      color: $dark-mode--color-primary;

      &.router-link-exact-active {
        color: $dark-mode--color-secondary;
      }
      &:hover {
        color: $dark-mode--color-secondary;
        background-color: transparentize($dark-mode--color-primary, 0.96);
      }
    }

    .hamburger-icon {
      .line {
        background-color: $dark-mode--color-primary;
      }
    }
  }
}

.hamburger-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  .line {
    width: 70%;
    height: 5px;
    background-color: #461616;
    margin: 3px;
    border-radius: 10px;
    transition: 0.5s;
  }
}

.nav-container {
  height: 0;
  border-radius: 5px;
  border: 0px solid $color-primary;
  background-color: #f4f4f4;
  position: absolute;
  top: 60%;
  right: 2px;
  margin-top: 10px;
  transition: height 0.5s, border-width 0.3s;
  overflow: hidden;
}

.hidden-checkbox {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  opacity: 0;
  z-index: 2;
  cursor: pointer;

  &:checked {
    & ~ .nav-container {
      height: 16.5rem;
      border-width: 2px;
    }
    & + .hamburger-icon {
      .line {
        &:not(:first-child):not(:last-child) {
          width: 0;
          opacity: 0;
        }
        &:first-child {
          display: block;
          transform: translate(-30%, 200%) rotate(45deg);
          width: 50%;
        }
        &:last-child {
          display: block;
          transform: translate(30%, -252%) rotate(-45deg);
          width: 50%;
        }
      }
    }
  }
}

.hamburger-menu {
  .hidden-checkbox:hover ~ .hamburger-icon .line {
    background-color: $color-secondary;
  }

  &.dark-mode {
    .hidden-checkbox:hover ~ .hamburger-icon .line {
      background-color: $dark-mode--color-secondary;
    }
  }
}

nav {
  display: flex;
  flex-direction: column;

  .link {
    &.router-link-exact-active {
      color: $color-secondary;
      background-color: transparentize(#1f0f0f, 0.8);
    }

    color: $color-primary;
    display: block;
    padding: 1rem;
    font-size: 1.2rem;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
      background-color: transparentize(#1f0f0f, 0.9);
      color: $color-secondary;
    }
  }
}

@mixin smaller-header-styles-hamburger-menu-link {
  padding: 0.1rem 0.7rem;
}

@mixin normal-header-styles-hamburger-menu-link {
  padding: 1rem;
}

@keyframes smaller-header-animation-hamburger-menu-link {
  0% {
    @include normal-header-styles-hamburger-menu-link;
    transform: translateY(0px);
  }
  45% {
    @include normal-header-styles-hamburger-menu-link;
    transform: translateY(-10rem);
  }
  50% {
    @include smaller-header-styles-hamburger-menu-link;
  }
  55% {
    transform: translateY(-10rem);
    @include smaller-header-styles-hamburger-menu-link;
  }
  100% {
    transform: translateY(0);
    @include smaller-header-styles-hamburger-menu-link;
  }
}

@keyframes normal-header-animation-hamburger-menu-link {
  0% {
    @include smaller-header-styles-hamburger-menu-link;
    transform: translateY(0px);
  }
  45% {
    @include smaller-header-styles-hamburger-menu-link;
    transform: translateY(-10rem);
  }
  50% {
    @include normal-header-styles-hamburger-menu-link;
  }
  55% {
    transform: translateY(-10rem);
    @include normal-header-styles-hamburger-menu-link;
  }
  100% {
    transform: translateY(0);
    @include normal-header-styles-hamburger-menu-link;
  }
}

@mixin smaller-header-styles-hamburger {
  height: 30px;
  width: 30px;
}

@mixin normal-header-styles-hamburger {
  height: 50px;
  width: 50px;
}

@keyframes smaller-header-animation-hamburger {
  0% {
    @include normal-header-styles-hamburger;
    transform: translateY(0px);
  }
  45% {
    @include normal-header-styles-hamburger;
    transform: translateY(-10rem);
  }
  50% {
    @include smaller-header-styles-hamburger;
  }
  55% {
    transform: translateY(-10rem);
    @include smaller-header-styles-hamburger;
  }
  100% {
    transform: translateY(0);
    @include smaller-header-styles-hamburger;
  }
}

@keyframes normal-header-animation-hamburger {
  0% {
    @include smaller-header-styles-hamburger;
    transform: translateY(0px);
  }
  45% {
    @include smaller-header-styles-hamburger;
    transform: translateY(-10rem);
  }
  50% {
    @include normal-header-styles-hamburger;
  }
  55% {
    transform: translateY(-10rem);
    @include normal-header-styles-hamburger;
  }
  100% {
    transform: translateY(0);
    @include normal-header-styles-hamburger;
  }
}
</style>
