<template>
  <div id="app">
    <TopNavigation></TopNavigation>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNavigation from "./components/TopNavigation.vue";

export default {
  components: {
    TopNavigation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
