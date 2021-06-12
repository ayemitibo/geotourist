<template>
  <div class="main">
    <base-topbar />
      <section class="flex align-items-strech">
        <base-sidebar />
        <div class="w-75">
          <router-view />
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main {
  height: 100vh;
}
</style>
