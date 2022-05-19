<template>
  <div>
    <AppHeader v-bind:propsdata="title"></AppHeader>
    <AppContent v-on:renew="renewTitle"></AppContent>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppContent from "./components/AppContent.vue";

export default {
  data: function () {
    return {
      title: "hello world",
    };
  },
  components: {
    AppHeader,
    AppContent,
  },
  methods: {
    renewTitle: function () {
      this.title = "foo";
    },
  },
};
</script>

<style></style>
