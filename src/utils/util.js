/*
 * @Author: your name
 * @Date: 2022-03-14 19:43:03
 * @LastEditTime: 2022-03-14 19:56:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \qdreamer-offical-website\src\utils\util.js
 */
// 存储localStorage
const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

// 获取localStorage
const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}
// sessionStorage
const setSession = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
}


// 获取sessionStorage
const getSession = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
}
export {
  setStore,
  getStore,
  setSession,
  getSession
}