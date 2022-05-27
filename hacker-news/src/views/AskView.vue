<template>
  <div>
    <p v-for="(ask, index) in fetchedAskList" v-bind:key="index">
      <router-link v-bind:to="`/item/${ask.id}`">{{ ask.title }}</router-link>
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
