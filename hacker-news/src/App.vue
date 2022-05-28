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

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #41b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
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
