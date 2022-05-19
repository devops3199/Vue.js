<template>
  <form v-on:submit="handleSubmit">
    <div>
      <label for="username">Username: </label>
      <!-- v-model = Two Way Data Binding -->
      <input type="text" for="username" v-model="username" />
    </div>
    <div>
      <label for="password">Password: </label>
      <input type="password" for="password" v-model="password" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
      console.log(this.username, this.password);
    },
  },
};
</script>

<style></style>
