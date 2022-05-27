<template>
  <div>
    <p v-for="(ask, index) in fetchedAskList" v-bind:key="index">
      <a v-bind:href="ask.url" target="_blank">{{ ask.title }}</a>
      <small
        >{{ ask.time_ago }} by
        <router-link v-bind:to="`/user/${ask.user}`">{{
          ask.user
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
      fetchedAskList: "fetchedAskList",
    }),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
