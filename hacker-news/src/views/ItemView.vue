<template>
  <div>
    <h3>{{ fetchedItem.title }}</h3>
    <section class="author">
      <small>
        {{ fetchedItem.time_ago }} by
        <router-link v-bind:to="`/user/${fetchedItem.user}`">{{
          fetchedItem.user
        }}</router-link>
      </small>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
    <hr />
    <h4>Comments ({{ fetchedItem.comments_count }})</h4>
    <section>
      <div
        class="comment"
        v-for="item in fetchedItem.comments"
        v-bind:key="item"
      >
        <div v-html="item.content"></div>
        <small>{{ item.time_ago }} by {{ item.user }}</small>
      </div>
    </section>
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
    const { id } = this.$route.query;
    this.$store.dispatch("FETCH_ITEM", id);
  },
};
</script>

<style scoped>
.author {
  display: flex;
  justify-content: flex-end;
}

.comment {
  border: 1px solid #42b883;
  padding: 8px;
  margin-bottom: 8px;
}

.comment > small {
  display: flex;
  justify-content: flex-end;
}
</style>
