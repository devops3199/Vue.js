<template>
  <div>
    <div v-for="(ask, index) in fetchedAskList" v-bind:key="index">
      <h3>{{ ask.title }}</h3>
    </div>
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
