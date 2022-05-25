import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    Object.keys(localStorage).forEach((key) => {
      if (localStorage.getItem(key) !== "") {
        arr.push(JSON.parse(localStorage.getItem(key)));
      }
    });
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  mutations: {
    addTodoItem(store, payload) {
      const { todoItems } = store;
      const { item } = payload;

      localStorage.setItem(item, JSON.stringify({ completed: false, item }));
      todoItems.push({ completed: false, item });
    },
    removeTodoItem(store, payload) {
      const { todoItems } = store;
      const { item, index } = payload;

      localStorage.removeItem(item);
      todoItems.splice(index, 1);
    },
    completeTodoItem(store, payload) {
      const { todoItems } = store;
      const { key, index } = payload;

      const item = JSON.parse(localStorage.getItem(key));
      item.completed = !item.completed;
      localStorage.setItem(key, JSON.stringify(item));
      todoItems[index].completed = !todoItems[index].completed;
    },
    clearTodoItems(store) {
      localStorage.clear();
      store.todoItems = [];
    },
  },
});
