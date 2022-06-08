<template>
  <ul class="list-item">
    <li class="item" v-for="(item, index) in items" v-bind:key="index">
      <div class="points">
        {{ item.points ? item.points : item.comments_count }}
      </div>
      <div>
        <p class="title">
          <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
        </p>
        <small
          >{{ item.time_ago }} by
          <router-link v-if="item.user" v-bind:to="`/user/${item.user}`">{{
            item.user
          }}</router-link>
          <span v-else>
            {{ item.domain }}
          </span>
        </small>
      </div>
    </li>
  </ul>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
});
</script>

<style scoped>
.list-item {
  margin: 0;
  padding: 0;
}

.item {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #41b883;
}

.title {
  margin: 0;
}
</style>
