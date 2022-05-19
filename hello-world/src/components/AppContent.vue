<template>
  <main>
    <button v-on:click="handleClick">Click Me</button>
  </main>
</template>

<script>
export default {
  methods: {
    handleClick: function () {
      this.$emit("renew");
    },
  },
};
</script>

<style></style>
