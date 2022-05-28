<template>
  <UserProfile>
    <h4 slot="username">
      {{ username }}
    </h4>
    <div slot="detail">
      <p>karma: {{ fetchedUserInfo.karma }}</p>
      <p>created: {{ fetchedUserInfo.created }}</p>
    </div>
  </UserProfile>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  data() {
    return {
      username: "",
    };
  },
  computed: {
    ...mapGetters({
      fetchedUserInfo: "fetchedUserInfo",
    }),
  },
  created() {
    const { id: username } = this.$route.params;
    this.$store.dispatch("FETCH_USER_INFO", username);
    this.username = username;
  },
  components: {
    UserProfile,
  },
};
</script>

<style></style>
