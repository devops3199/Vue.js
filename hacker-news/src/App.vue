<template>
  <div id="app">
    <TopNavigation></TopNavigation>
    <Spinner :loading="isLoading"></Spinner>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import TopNavigation from "./components/TopNavigation.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";

export default {
  components: {
    TopNavigation,
    Spinner,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    startSpinner() {
      this.isLoading = true;
    },
    endSpinner() {
      this.isLoading = false;
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
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
