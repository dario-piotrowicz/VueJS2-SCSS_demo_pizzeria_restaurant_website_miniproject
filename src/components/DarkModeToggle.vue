<template>
  <div>
    <input type="checkbox" v-model="darkMode" />
    <label>Dark Mode</label>
  </div>
</template>

<script>
export default {
  computed: {
    darkMode: {
      get: function () {
        return this.$store.state.darkMode;
      },
      set: function (value) {
        this.$store.commit("set_darkMode", value);
      },
    },
  },
};
</script>