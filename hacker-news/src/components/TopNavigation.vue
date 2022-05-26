<template>
  <header>
    <nav>
      <router-link to="/news">News</router-link> |
      <router-link to="/jobs">Jobs</router-link> |
      <router-link to="/ask">Ask</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  background-color: #42b883;
  display: flex;
  color: white;
  padding: 8px;
}

a {
  color: white;
  padding: 0 8px;
}

.router-link-exact-active {
  color: #354953;
}
</style>
