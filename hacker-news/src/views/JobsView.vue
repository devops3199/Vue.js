<template>
  <div>
    <div v-for="(job, index) in fetchedJobs" v-bind:key="index">
      <h3>{{ job.title }}</h3>
    </div>
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
