<template>
  <div>
    <div v-for="(news, index) in newsList" v-bind:key="index">
      <h3>{{ news.title }}</h3>
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";

export default {
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    fetchNewsList()
      .then((response) => (this.newsList = response.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
