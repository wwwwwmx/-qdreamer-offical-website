/*
 * @Author: your name
 * @Date: 2021-11-02 15:45:52
 * @LastEditTime: 2022-03-12 16:03:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"
// 将ES6代码转为ES5代码，我们可以直接用用ES6编写，而不用考虑环境支持的问题
ElementUI.Dialog.props.lockScroll.default = false;

import 'babel-polyfill'
// element-ui引入默认主题
import 'element-ui/lib/theme-chalk/index.css';
import Carousel3d from 'vue-carousel-3d';
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import VueParticles from 'vue-particles'
import store from './store';
import BaiduMap from 'vue-baidu-map'
import VueScrollReveal from 'vue-scroll-reveal';
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1000,
  scale: 1,
  distance: '50px',
  reset: true,
  mobile: false,
  useDelay: 'always',
  origin: 'bottom',
  delay: 200
});

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})

Vue.use(Carousel3d);
Vue.use(ElementUI);
Vue.config.productionTip = true;
Vue.use(AOS)
Vue.use(VueParticles)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted() {
    // You'll need this for renderAfterDocumentEvent.

    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})
