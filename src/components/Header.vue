<template>
  <header id="header">
    <div class="centering-container">
      <img src="../assets/images/logo.png" />
      <nav>
        <div class="link"><router-link to="/">Home</router-link></div>
        <div class="link"><router-link to="/menu">Menu</router-link></div>
        <div class="link">
          <router-link to="/delivery">Delivery</router-link>
        </div>
        <div class="link"><router-link to="/about">About</router-link></div>
      </nav>
    </div>
  </header>
</template>


<style lang="scss" scoped>
#header {
  background-color: #fff;
  .centering-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    img {
      width: 20rem;
    }

    nav {
      display: flex;

      .link {
        a {
          color: rgb(70, 22, 22);
          margin: 1rem;
          font-size: 1.2rem;
          text-decoration: none;
        }
      }
    }
  }
}
</style>