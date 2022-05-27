<template>
  <div>
    <p v-for="(news, index) in fetchedNewsList" v-bind:key="index">
      <a v-bind:href="news.url" target="_blank">{{ news.title }}</a>
      <small
        >{{ news.time_ago }} by
        <router-link v-bind:to="`/user/${news.user}`">{{
          news.user
        }}</router-link></small
      >
    </p>
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
