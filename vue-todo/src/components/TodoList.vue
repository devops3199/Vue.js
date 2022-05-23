<template>
  <div>
    <ul>
      <li
        class="shadow"
        v-bind:key="stringified"
        v-for="(stringified, index) in todoItems"
      >
        <span>
          <font-awesome-icon
            class="checkBtn"
            icon="check"
            v-bind:class="{
              checkBtnCompleted: JSON.parse(stringified).completed,
            }"
            v-on:click="toggleComplete(JSON.parse(stringified).item)"
          />
          <span
            v-bind:class="{ textCompleted: JSON.parse(stringified).completed }"
            >{{ JSON.parse(stringified).item }}</span
          >
        </span>

        <span
          class="removeBtn"
          v-on:click="removeTodo(JSON.parse(stringified).item, index)"
        >
          <font-awesome-icon icon="trash-can" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  methods: {
    removeTodo: function (item, index) {
      localStorage.removeItem(item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function (key) {
      const item = JSON.parse(localStorage.getItem(key));
      item.completed = !item.completed;
      localStorage.setItem(key, JSON.stringify(item));
    },
  },
  created: function () {
    Object.keys(localStorage).forEach((key) => {
      if (localStorage.getItem(key) !== "") {
        this.todoItems.push(localStorage.getItem(key));
      }
    });
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background-color: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
  cursor: pointer;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  color: #de4343;
  cursor: pointer;
}
</style>
