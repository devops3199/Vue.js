<template>
  <div>
    <div v-for="(job, index) in jobs" v-bind:key="index">
      <h3>{{ job.title }}</h3>
    </div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index.js";

export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobsList()
      .then((response) => (this.jobs = response.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
