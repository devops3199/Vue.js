<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <font-awesome-icon class="addBtn" icon="plus" />
    </span>
    <TodoModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Warning</h3>
      <div slot="body">Please write something</div>
      <div slot="footer">
        <button @click="showModal = false">Close</button>
      </div>
    </TodoModal>
  </div>
</template>

<script>
import TodoModal from "./TodoModal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        this.$store.commit("addTodoItem", { item: this.newTodoItem });
        this.clearInput();
        return;
      }

      this.showModal = true;
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    TodoModal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  display: flex;
  justify-content: space-between;
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  height: 50px;
  width: 100%;
  padding-left: 1rem;
  font-size: 1.2rem;
}

.addContainer {
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
