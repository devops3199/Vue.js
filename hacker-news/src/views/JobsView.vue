<template>
  <ItemList :items="fetchedJobs"></ItemList>
</template>

<script>
import { mapGetters } from "vuex";
import ItemList from "../components/ItemList.vue";
import bus from "../utils/bus";

export default {
  computed: {
    ...mapGetters({
      fetchedJobs: "fetchedJobs",
    }),
  },
  created() {
    bus.$emit("start:spinner");
    this.$store.dispatch("FETCH_JOBS").finally(() => bus.$emit("end:spinner"));
  },
  components: {
    ItemList,
  },
};
</script>

<style></style>
