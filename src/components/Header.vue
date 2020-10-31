<template>
  <header id="header" :class="headerClass">
    <div class="centering-container">
      <router-link to="/"><img src="../assets/images/logo.png" /></router-link>
      <dark-mode-toggle />
      <div class="menus-container">
        <nav class="full">
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
        <hamburger-menu :smallerMenu="smallerHeader"></hamburger-menu>
      </div>
    </div>
  </header>
</template>

<script>
import DarkModeToggle from "./header-components/DarkModeToggle";
import HamburgerMenu from "./header-components/HamburgerMenu";

export default {
  data: function () {
    return {
      smallerHeader: false,
      smallerHeaderClass: "",
    };
  },
  components: {
    "dark-mode-toggle": DarkModeToggle,
    "hamburger-menu": HamburgerMenu,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const wasSmaller = this.smallerHeader;
      if (window.scrollY > 200) {
        this.smallerHeader = true;
        this.smallerHeaderClass = "smaller-header";
      } else if (wasSmaller) {
        this.smallerHeader = false;
        this.smallerHeaderClass = "normal-header";
      }
    },
  },
  computed: {
    headerClass: function () {
      let resultClass = this.smallerHeaderClass;
      if (this.$store.state.darkMode) {
        resultClass += " dark-mode";
      }
      return resultClass;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/constants.scss";

#header {
  background-color: #fff;
  box-shadow: 0px -6px 20px 3px;
  position: fixed;
  width: 100%;
  z-index: 100;

  &.smaller-header {
    animation: smaller-header-animation 0.5s ease-in-out forwards;

    .centering-container {
      img {
        animation: smaller-header-animation-img 0.5s ease-in-out forwards;
      }
      .link {
        animation: smaller-header-animation-link 0.5s ease-in-out forwards;
        &.router-link-exact-active::after {
          margin-top: 0;
        }
      }
    }
  }

  &.normal-header {
    animation: normal-header-animation 0.5s ease-in-out forwards;

    .centering-container {
      img {
        animation: normal-header-animation-img 0.5s ease-in-out forwards;
      }
      .link {
        animation: normal-header-animation-link 0.5s ease-in-out forwards;
      }
    }
  }

  .centering-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    img {
      width: 15rem;
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
  }

  &.dark-mode {
    background-color: $dark-mode--neutral-background;
    box-shadow: 0px -6px 20px 3px $dark-mode--color-primary;

    .centering-container {
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
  }
}

.menus-container {
  display: flex;
  align-items: center;

  @media (min-width: 799px) {
    flex-direction: row-reverse;
  }
}

@keyframes link-underline {
  0% {
    opacity: 0;
    transform: translateY(5px);
  }
  30% {
    opacity: 1;
  }
  70% {
    transform: translateY(-5px);
  }
  80% {
    transform: translateY(2px);
  }
  90% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
}

@mixin smaller-header-styles {
  opacity: 0.75;
}

@mixin normal-header-styles {
  opacity: 1;
}

@keyframes smaller-header-animation {
  0% {
    @include normal-header-styles;
    transform: translateY(0px);
  }
  45% {
    @include normal-header-styles;
    transform: translateY(-10rem);
  }
  50% {
    @include smaller-header-styles;
  }
  55% {
    transform: translateY(-10rem);
    @include smaller-header-styles;
  }
  100% {
    transform: translateY(0);
    @include smaller-header-styles;
  }
}

@keyframes normal-header-animation {
  0% {
    @include smaller-header-styles;
    transform: translateY(0px);
  }
  45% {
    @include smaller-header-styles;
    transform: translateY(-10rem);
  }
  50% {
    @include normal-header-styles;
  }
  55% {
    transform: translateY(-10rem);
    @include normal-header-styles;
  }
  100% {
    transform: translateY(0);
    @include normal-header-styles;
  }
}

@mixin smaller-header-styles-img {
  width: 11rem;
}

@mixin normal-header-styles-img {
  width: 15rem;
}

@keyframes smaller-header-animation-img {
  0% {
    @include normal-header-styles-img;
    transform: translateY(0px);
  }
  45% {
    @include normal-header-styles-img;
    transform: translateY(-10rem);
  }
  50% {
    @include smaller-header-styles-img;
  }
  55% {
    transform: translateY(-10rem);
    @include smaller-header-styles-img;
  }
  100% {
    transform: translateY(0);
    @include smaller-header-styles-img;
  }
}

@keyframes normal-header-animation-img {
  0% {
    @include smaller-header-styles-img;
    transform: translateY(0px);
  }
  45% {
    @include smaller-header-styles-img;
    transform: translateY(-10rem);
  }
  50% {
    @include normal-header-styles-img;
  }
  55% {
    transform: translateY(-10rem);
    @include normal-header-styles-img;
  }
  100% {
    transform: translateY(0);
    @include normal-header-styles-img;
  }
}

@mixin smaller-header-styles-link {
  padding: 0;
}

@mixin normal-header-styles-link {
  padding: 1rem 0.5rem;
}

@keyframes smaller-header-animation-link {
  0% {
    @include normal-header-styles-link;
    transform: translateY(0px);
  }
  45% {
    @include normal-header-styles-link;
    transform: translateY(-10rem);
  }
  50% {
    @include smaller-header-styles-link;
  }
  55% {
    transform: translateY(-10rem);
    @include smaller-header-styles-link;
  }
  100% {
    transform: translateY(0);
    @include smaller-header-styles-link;
  }
}

@keyframes normal-header-animation-link {
  0% {
    @include smaller-header-styles-link;
    transform: translateY(0px);
  }
  45% {
    @include smaller-header-styles-link;
    transform: translateY(-10rem);
  }
  50% {
    @include normal-header-styles-link;
  }
  55% {
    transform: translateY(-10rem);
    @include normal-header-styles-link;
  }
  100% {
    transform: translateY(0);
    @include normal-header-styles-link;
  }
}
</style>
