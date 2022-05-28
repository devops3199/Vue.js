<template>
  <ItemList :items="fetchedAskList"></ItemList>
</template>

<script>
import { mapGetters } from "vuex";
import ItemList from "../components/ItemList.vue";
import bus from "../utils/bus.js";

export default {
  computed: {
    ...mapGetters({
      fetchedAskList: "fetchedAskList",
    }),
  },
  created() {
    bus.$emit("start:spinner");
    this.$store.dispatch("FETCH_ASK").finally(() => bus.$emit("end:spinner"));
  },
  components: {
    ItemList,
  },
};
</script>

<style></style>
