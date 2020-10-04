<template>
  <div class="menu-item-container">
    <div class="menu-item">
      <div class="front">
        <h3 class="title">{{ name }}</h3>
        <div class="content">
          <img :src="imageSrc" />
          <p class="price">price: {{ price }}$</p>
        </div>
      </div>
      <div class="back">
        <p class="description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "imageSrc", "price", "description"],
};
</script>

<style lang="scss" scoped>
.menu-item {
  &-container {
    width: 15rem;
    height: 13rem;
    perspective: 550px;
    display: inline-block;
    margin-right: 2.2rem;
    margin-bottom: 2.2rem;

    &:hover .menu-item {
      transform: rotateY(180deg);
    }
  }

  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.85s;
  transform-style: preserve-3d;

  .front,
  .back {
    border: 2px solid rgb(70, 22, 22);
    border-radius: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../assets/images/paper-background.jpg") no-repeat bottom
      center/cover fixed;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-origin: 43.5%;
  }

  .front {
    padding: 1rem;
  }

  .back {
    width: calc(100% + 2rem);
    height: calc(100% + 2rem);
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 80%;
  height: 8rem;
  border-radius: 10px;
}

.title {
  margin: 0 0 10px 0;
  color: rgb(223, 91, 4);
}

.price {
  margin: 10px 0 0 0;
  align-self: flex-end;
}

.description {
  padding: 0 2rem;
  text-align: center;
  line-height: 1.5;
}
</style>