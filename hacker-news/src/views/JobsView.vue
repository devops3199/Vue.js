<template>
  <div>
    <div v-for="(job, index) in this.$store.state.jobs" v-bind:key="index">
      <h3>{{ job.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
