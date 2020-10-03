<template>
  <div
    class="generic-info-card centering-container"
    :class="{ 'image-on-the-right': !!imageOnTheRight }"
  >
    <img :src="imageSrc" />
    <section class="content">
      <h2 class="title">{{ title }}</h2>
      <p class="description">
        {{ description }}
      </p>
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
  props: ["imageSrc", "title", "description", "imageOnTheRight"],
};
</script>

<style lang="scss" scoped>
.generic-info-card {
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;

  &.image-on-the-right {
    flex-direction: row-reverse;
  }

  & > img,
  & > .content {
    width: 50%;
    flex: 1;
    margin: 0.5rem;
  }

  & > img {
    object-fit: cover;
    border-radius: 10px;
  }

  & > .content {
    padding: 2rem;
    & > .title {
      margin-top: 0;
      color: rgb(223, 91, 4);
    }

    & > .description {
      line-height: 2.5;
    }
  }
}
</style>>