<template>
  <header id="header">
    <div class="centering-container">
      <router-link to="/"><img src="../assets/images/logo.png" /></router-link>
      <nav>
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
    </div>
  </header>
</template>

<style lang="scss" scoped>
#header {
  background-color: #fff;
  box-shadow: 0px -6px 20px 3px;
  position: fixed;
  width: 100%;
  z-index: 100;

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
  }
}

@keyframes link-underline {
  0% {
    transform: translateY(5px);
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
</style>
