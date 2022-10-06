<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit('tabs/getTabs')
  },
}
</script>
<style lang="scss">
body,html{
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
</style>
