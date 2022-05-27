<template>
  <div>
    <div v-for="(news, index) in this.$store.state.newsList" v-bind:key="index">
      <h3>{{ news.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>
