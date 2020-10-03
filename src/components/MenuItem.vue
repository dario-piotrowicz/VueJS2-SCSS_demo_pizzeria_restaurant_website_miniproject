<template>
  <div class="menu-item">
    <h3 class="title">{{ name }}</h3>
    <div class="content">
      <img :src="imageSrc" />
      <p class="price">price: {{ price }}$</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "imageSrc", "price"],
};
</script>

<style lang="scss" scoped>
.menu-item {
  display: inline-block;
  width: 15rem;
  padding: 1rem;
  border: 2px solid rgb(70, 22, 22);
  border-radius: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 80%;
  height: 8rem;
}

.title {
  margin: 0 0 10px 0;
  color: rgb(223, 91, 4);
}

.price {
  margin: 10px 0 0 0;
  align-self: flex-end;
}
</style>