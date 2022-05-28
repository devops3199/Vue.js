<template>
  <ItemList v-bind:items="fetchedAskList"></ItemList>
</template>

<script>
import { mapGetters } from "vuex";
import ItemList from "../components/ItemList.vue";

export default {
  computed: {
    ...mapGetters({
      fetchedAskList: "fetchedAskList",
    }),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
  components: {
    ItemList,
  },
};
</script>

<style></style>
