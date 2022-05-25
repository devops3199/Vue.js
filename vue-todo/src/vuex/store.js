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
});
