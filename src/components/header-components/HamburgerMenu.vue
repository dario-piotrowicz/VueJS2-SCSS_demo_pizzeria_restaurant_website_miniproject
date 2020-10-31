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
    <div class="smaller-nav-container">
      <nav class="small">
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
          :class="{
            'router-link-exact-active': $route.path === '/delivery',
          }"
        >
          <router-link to="/delivery">Delivery</router-link>
        </div>
        <div
          class="link"
          :class="{
            'router-link-exact-active': $route.path === '/about',
          }"
        >
          <router-link to="/about">About</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["smallerMenu"],
  data: function () {
    return {
      hamburgerMenuOpen: false,
      menuHasBeenSmaller: false,
    };
  },
  computed: {
    ...mapState(["darkMode"]),
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
@import "./shared-styles.scss";

.hamburger-menu {
  position: relative;
  height: 60px;
  width: 60px;
  padding: 10px;
  box-sizing: border-box;

  &.normal-menu {
    animation: normal-header-animation-hamburger 0.5s ease-in-out forwards;
    .link {
      padding: 0;
      animation: normal-header-animation-link 0.5s ease-in-out forwards;
      &.router-link-exact-active::after {
        margin-top: 0;
      }
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
    .hidden-checkbox:checked ~ .smaller-nav-container {
      height: 8.5rem;
    }
    @include smallerMenuLink();
  }

  &.dark-mode {
    .smaller-nav-container {
      border-color: $dark-mode--color-primary;
      background-color: $dark-mode--neutral-background;
      nav.small > .link.router-link-exact-active {
        background-color: transparentize($dark-mode--color-primary, 0.9);
      }
    }

    @include darkModeLinksColors();

    .hamburger-icon {
      .line {
        background-color: $dark-mode--color-primary;
      }
      &:hover .hamburger-icon .line {
        background-color: $dark-mode--color-secondary;
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
.hamburger-menu:hover .hamburger-icon .line {
  background-color: $color-secondary;
}

.smaller-nav-container {
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
    & ~ .smaller-nav-container {
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

nav.small {
  flex-direction: column;

  & > .link.router-link-exact-active {
    background-color: rgba(#1f0f0f, 0.05);

    &::after {
      content: none;
    }
  }
}

nav {
  display: flex;

  &.full {
    @media (max-width: 800px) {
      opacity: 0;
      width: 0;
      z-index: -1;
    }
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
}
</style>