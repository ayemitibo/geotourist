<template>
  <div>
    <top-bar />
  </div>
</template>

<script>
import TopBar from '@/components/Topbar'
export default {
  name: 'App',
  components: {
   TopBar
  }
}
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
</style>
