<template>
  <div>
    <label>
      <input type="checkbox" v-model="darkMode" />
      Dark Mode</label
    >
  </div>
</template>

<script>
export default {
  computed: {
    darkMode: {
      get: function() {
        return this.$store.getters.darkMode;
      },
      set: function(value) {
        this.$store.commit("set_darkMode", value);
      },
    },
  },
};
</script>
