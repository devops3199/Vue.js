<template>
  <ItemList v-bind:items="fetchedJobs"></ItemList>
</template>

<script>
import { mapGetters } from "vuex";
import ItemList from "../components/ItemList.vue";

export default {
  computed: {
    ...mapGetters({
      fetchedJobs: "fetchedJobs",
    }),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
  components: {
    ItemList,
  },
};
</script>

<style></style>
