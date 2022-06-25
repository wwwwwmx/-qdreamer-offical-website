/*
 * @Author: your name
 * @Date: 2022-03-12 11:36:42
 * @LastEditTime: 2022-03-14 19:57:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \qdreamer-offical-website\src\store\index.js
 */
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

//引入unitl包这个不太懂应该是测试的？
import {
  NAVINDEX,
  PAGEINDEX
} from "utils/const";
import { setSession,getSession } from "utils/util";
/**
 *   @param {Number} navIndex  表示当前页面所在的导航
 *   @param {Number} pageIndex 标识当前页面所在的具体导航
 */


const state = {
  navIndex: +getSession(NAVINDEX)||"",
  pageIndex: +getSession(PAGEINDEX)||"",
}

const mutations = {

  changePlace(state, {
    navIndex,
    pageIndex
  }) {
    state.navIndex = navIndex;
    state.pageIndex = pageIndex;
    setSession(NAVINDEX, state.navIndex);
    setSession(PAGEINDEX, state.pageIndex);
  }
}

export default new Vuex.Store({
  state,
  mutations,
  // 对应模块处理(可额外再写其他模块)
  // modules: {}
})
