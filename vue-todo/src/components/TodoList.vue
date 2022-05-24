<template>
  <div>
    <transition-group name="list" tag="ul">
      <li class="shadow" v-bind:key="data" v-for="(data, index) in propsdata">
        <span>
          <font-awesome-icon
            class="checkBtn"
            icon="check"
            v-bind:class="{
              checkBtnCompleted: data.completed,
            }"
            v-on:click="toggleComplete(data.item, index)"
          />
          <span v-bind:class="{ textCompleted: data.completed }">{{
            data.item
          }}</span>
        </span>

        <span class="removeBtn" v-on:click="removeTodo(data.item, index)">
          <font-awesome-icon icon="trash-can" />
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    removeTodo(item, index) {
      this.$emit("removeTodoItem", item, index);
    },
    toggleComplete(key, index) {
      this.$emit("completeTodoItem", key, index);
    },
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

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
