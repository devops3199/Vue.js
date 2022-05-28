<template>
  <ItemList :items="fetchedNewsList"></ItemList>
</template>

<script>
import { mapGetters } from "vuex";
import ItemList from "../components/ItemList.vue";

export default {
  computed: {
    ...mapGetters({
      fetchedNewsList: "fetchedNewsList",
    }),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
  components: {
    ItemList,
  },
};
</script>
