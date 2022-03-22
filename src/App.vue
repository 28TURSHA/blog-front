<template>
  <div id="nav">
    <Navbar />
    <main>
      <router-view :key="$route.fullPath" />
    </main>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: orange;
}
</style>
