<template>
  <ItemList :items="fetchedList"></ItemList>
</template>

<script>
import { mapGetters } from "vuex";
import ItemList from "../components/ItemList.vue";

export default {
  components: {
    ItemList,
  },
  computed: {
    ...mapGetters({
      fetchedList: "fetchedList",
    }),
  },
};
</script>

<style></style>
