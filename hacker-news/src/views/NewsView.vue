<template>
  <ItemList :items="fetchedNewsList"></ItemList>
</template>

<script>
import { mapGetters } from "vuex";
import ItemList from "../components/ItemList.vue";
import bus from "../utils/bus.js";

export default {
  computed: {
    ...mapGetters({
      fetchedNewsList: "fetchedNewsList",
    }),
  },
  created() {
    bus.$emit("start:spinner");
    this.$store.dispatch("FETCH_NEWS").finally(() => bus.$emit("end:spinner"));
  },
  components: {
    ItemList,
  },
};
</script>
