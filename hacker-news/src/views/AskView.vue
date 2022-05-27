<template>
  <div>
    <div v-for="(ask, index) in this.$store.state.askList" v-bind:key="index">
      <h3>{{ ask.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
