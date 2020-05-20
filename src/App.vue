<template>
  <div id="app">
    <router-view name="footer"/>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
<style>
</style>

<style lang="less">
html,body{
  height: 100%;
  width: 100%;
  background-color: #f3f2f7;
  -webkit-overflow-scrolling: touch;
}
#app{
  overflow: hidden;
}
</style>
