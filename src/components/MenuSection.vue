<template>
  <section class="menu-section" :class="darkMode ? 'dark-mode' : ''">
    <h2 class="title">{{ title }}</h2>
    <div class="menu-items-container">
      <menu-item
        v-for="item of items"
        :key="item.id"
        :name="item.name"
        :imageSrc="item.imageSrc"
        :price="item.price"
        :description="item.description"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import MenuItem from "./MenuItem";
export default {
  props: ["title", "items"],
  components: {
    "menu-item": MenuItem,
  },
  computed: {
    ...mapState(["darkMode"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/constants.scss";

.menu-section {
  margin: 7rem 2rem;
  .title {
    margin-bottom: 0;
  }

  &.dark-mode {
    .title {
      color: $dark-mode--color-secondary;
    }
  }
}

.menu-items-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  & > * {
    margin: 2rem;
    flex-shrink: 0;
  }
}
</style>