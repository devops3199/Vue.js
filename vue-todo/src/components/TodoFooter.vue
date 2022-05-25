<template>
  <footer class="clearAllContainer" v-on:click="clearTodo">
    <span class="clearAllBtn">Clear All</span>
  </footer>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      clearTodo: "clearTodoItems",
    }),
  },
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
