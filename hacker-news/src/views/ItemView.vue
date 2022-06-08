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
        v-for="(item, index) in fetchedItem.comments"
        v-bind:key="index"
      >
        <template v-if="!!item.content">
          <div v-html="item.content"></div>
          <small>{{ item.time_ago }} by {{ item.user }}</small>
        </template>
        <div v-else>
          <small>Deleted</small>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { Actions } from '../vuex/actions';

export default Vue.extend({
  computed: {
    ...mapGetters({
      fetchedItem: 'fetchedItem',
    }),
  },
  created() {
    const { id } = this.$route.query;
    this.$store.dispatch(Actions.FETCH_LIST, id as string);
  },
});
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
