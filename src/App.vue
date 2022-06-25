<!--
 * @Author: your name
 * @Date: 2021-11-03 20:35:24
 * @LastEditTime: 2021-11-05 17:51:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\App.vue
-->
<template>
  <div id="app">
    <span hidden="hidden">奇梦者 - 多模态人机交互技术服务提供商</span>
    <img src="~assets/img/public/logo.png" hidden="hidden" alt="奇梦者 - 多模态人机交互技术服务提供商" title="奇梦者 - 多模态人机交互技术服务提供商" style="width:121px;height:75px">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>

<style lang="scss">
@import url("normalize.css");
@import url("assets/style/index.scss");
@import url("assets/style/reset-element.scss");
@import url("common/font/font.css");
html,
body {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: "Source Han Sans CN", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
