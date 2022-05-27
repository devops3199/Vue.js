<template>
  <div>
    <p>name: {{ fetchedUserInfo.id }}</p>
    <p>karma: {{ fetchedUserInfo.karma }}</p>
    <p>created: {{ fetchedUserInfo.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      fetchedUserInfo: "fetchedUserInfo",
    }),
  },
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("FETCH_USER_INFO", id);
  },
};
</script>

<style></style>
