<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addTodoItem"></TodoInput>
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeTodoItem="removeTodoItem"
      v-on:completeTodoItem="completeTodoItem"
    ></TodoList>
    <TodoFooter v-on:clearTodoItems="clearTodoItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  methods: {
    addTodoItem: function (item) {
      localStorage.setItem(item, JSON.stringify({ completed: false, item }));
      this.todoItems.push({ completed: false, item });
    },
    removeTodoItem: function (item, index) {
      localStorage.removeItem(item);
      this.todoItems.splice(index, 1);
    },
    completeTodoItem: function (key, index) {
      const item = JSON.parse(localStorage.getItem(key));
      item.completed = !item.completed;
      localStorage.setItem(key, JSON.stringify(item));
      this.todoItems[index].completed = !this.todoItems[index].completed;
    },
    clearTodoItems: function () {
      localStorage.clear();
      this.todoItems = [];
    },
  },
  created: function () {
    Object.keys(localStorage).forEach((key) => {
      if (localStorage.getItem(key) !== "") {
        this.todoItems.push(JSON.parse(localStorage.getItem(key)));
      }
    });
  },
};
</script>

<style>
body {
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
