<template>
  <div>
    <div v-for="(news, index) in fetchedNewsList" v-bind:key="index">
      <h3>{{ news.title }}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      fetchedNewsList: "fetchedNewsList",
    }),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>
