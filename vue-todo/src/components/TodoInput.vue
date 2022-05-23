<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <font-awesome-icon class="addBtn" icon="plus" />
    </span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== "") {
        localStorage.setItem(
          this.newTodoItem,
          JSON.stringify({ completed: false, item: this.newTodoItem })
        );
        this.clearInput();
      }
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
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
