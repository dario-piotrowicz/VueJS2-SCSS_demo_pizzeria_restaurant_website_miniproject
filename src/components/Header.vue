<template>
  <header id="header" :class="smallerHeaderClass">
    <div class="centering-container">
      <router-link to="/"><img src="../assets/images/logo.png" /></router-link>
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
        <div class="hamburger-menu">
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
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      smallerHeaderClass: "",
      hamburgerMenuOpen: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const wasSmaller = this.smallerHeaderClass === "smaller-header";
      if (window.scrollY > 200) {
        this.smallerHeaderClass = "smaller-header";
      } else if (wasSmaller) {
        this.smallerHeaderClass = "normal-header";
      }
    },
  },
  watch: {
    $route: function () {
      this.hamburgerMenuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
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

      .hamburger-menu {
        animation: smaller-header-animation-hamburger 0.5s ease-in-out forwards;

        .hamburger-icon .line {
          width: 70%;
          height: 3px;
          margin: 2px;
        }
        .hidden-checkbox:checked ~ .smaller-nav-container {
          height: 8.5rem;
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

    .hamburger-menu {
      animation: normal-header-animation-hamburger 0.5s ease-in-out forwards;
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

      &.small {
        flex-direction: column;

        & > .link.router-link-exact-active {
          background-color: rgba(#1f0f0f, 0.05);

          &::after {
            content: none;
          }
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
            background-color: rgb(223, 91, 4);
            animation: link-underline 0.5s cubic-bezier(0, 0.8, 1, 0.85);
          }
          a {
            color: rgb(223, 91, 4);
          }
        }

        a {
          color: rgb(70, 22, 22);
          margin: 1rem;
          font-size: 1.2rem;
          text-decoration: none;
          transition: 0.5s;

          &:hover {
            color: rgb(223, 91, 4);
          }
        }
      }
    }

    .hamburger-menu {
      position: relative;
      height: 60px;
      width: 60px;
      padding: 10px;
      box-sizing: border-box;

      @media (min-width: 799px) {
        opacity: 0;
        width: 0;
        z-index: -1;
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
      &:hover .hamburger-icon .line {
        background-color: rgb(223, 91, 4);
      }

      .smaller-nav-container {
        height: 0;
        border-radius: 5px;
        border: 0px solid rgb(70, 22, 22);
        background-color: #f4f4f4;
        position: absolute;
        top: 80%;
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
              }
              &:first-child {
                display: block;
                transform: translate(-30%, 355%) rotate(45deg);
                width: 50%;
              }
              &:last-child {
                display: block;
                transform: translate(30%, -102%) rotate(-45deg);
                width: 50%;
              }
            }
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
