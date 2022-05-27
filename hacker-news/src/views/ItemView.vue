<template>
  <div>
    <h3>{{ fetchedItem.title }}</h3>
    <p>{{ fetchedItem.content }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      fetchedItem: "fetchedItem",
    }),
  },
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("FETCH_ITEM", id);
  },
};
</script>

<style></style>
