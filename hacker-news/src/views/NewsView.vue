<template>
  <ul class="news-list">
    <li
      class="news"
      v-for="(news, index) in fetchedNewsList"
      v-bind:key="index"
    >
      <div class="points">
        {{ news.points }}
      </div>
      <div>
        <p class="news-title">
          <a v-bind:href="news.url" target="_blank">{{ news.title }}</a>
        </p>
        <small
          >{{ news.time_ago }} by
          <router-link v-bind:to="`/user/${news.user}`">{{
            news.user
          }}</router-link></small
        >
      </div>
    </li>
  </ul>
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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.news {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #41b883;
}

.news-title {
  margin: 0;
}
</style>
