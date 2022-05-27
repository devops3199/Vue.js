<template>
  <div id="app">
    <TopNavigation></TopNavigation>
    <transition name="fade">
      <router-view></router-view>
    </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
