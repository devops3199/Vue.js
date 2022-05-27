<template>
  <div>
    <p v-for="(job, index) in fetchedJobs" v-bind:key="index">
      <a v-bind:href="job.url" target="_blank">{{ job.title }}</a>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      fetchedJobs: "fetchedJobs",
    }),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
