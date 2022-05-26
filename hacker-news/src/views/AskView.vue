<template>
  <div>
    <div v-for="(ask, index) in askList" v-bind:key="index">
      <h3>{{ ask.title }}</h3>
    </div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";

export default {
  data() {
    return {
      askList: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => (this.askList = response.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
