<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabBar/MainTabBar";
export default {
  components: {
    MainTabBar
  }
};
</script>
<style lang="stylus">
@import './assets/css/base.css';
</style>
