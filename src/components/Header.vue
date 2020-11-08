<template>
  <header id="header" :class="headerClass">
    <div class="centering-container">
      <router-link to="/"><img src="../assets/images/logo.png" /></router-link>
      <div class="menus-container">
        <full-nav-menu :smallerMenu="smallerHeader"></full-nav-menu>
        <hamburger-menu :smallerMenu="smallerHeader"></hamburger-menu>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import FullNavMenu from "./header-components/FullNavMenu";
import HamburgerMenu from "./header-components/HamburgerMenu";

export default {
  data: function () {
    return {
      smallerHeader: false,
      smallerHeaderClass: "",
    };
  },
  components: {
    "full-nav-menu": FullNavMenu,
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
    ...mapGetters(["darkMode"]),
    headerClass: function () {
      let resultClass = this.smallerHeaderClass;
      if (this.darkMode) {
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

    .centering-container img {
      animation: smaller-header-animation-img 0.5s ease-in-out forwards;
    }
  }

  &.normal-header {
    animation: normal-header-animation 0.5s ease-in-out forwards;

    .centering-container img {
      animation: normal-header-animation-img 0.5s ease-in-out forwards;
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
  }

  &.dark-mode {
    background-color: $dark-mode--neutral-background;
    box-shadow: 0px -6px 20px 3px $dark-mode--color-primary;
  }
}

.menus-container {
  display: flex;
  align-items: center;

  @media (min-width: 799px) {
    flex-direction: row-reverse;
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
</style>
