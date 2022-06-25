/*
 * @Author: your name
 * @Date: 2021-11-02 15:45:52
 * @LastEditTime: 2021-11-05 11:42:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


const Layout = () => import('cpom/public/Layout');
const HomePage = () => import("views/HomePage");
const Technology = () => import("views/Technology");
const Wear = () => import("views/Wear");
const Meeting = () => import("views/Meeting");
const Banking = () => import("views/Banking");
const English = () => import("views/English");
const Classroom = () => import("views/Classroom");
const Introduce = () => import("views/Introduce");
const Contact = () => import("views/Contact");
const Terminal = () => import("views/Terminal");
const MetaBrain = () => import("views/MetaBrain");
const Security = () => import("views/Security");
const WarIndustry = () => import("views/WarIndustry");
const ThreeClass = () => import("views/ThreeClass");
const CampusSecurity = () => import("views/CampusSecurity");
Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/home/home-page',
  },
  {
    desc: "奇梦者官网首页",
    path: '/home',
    name: 'home',
    redirect: '/home/home-page',
    component: Layout,
    children: [{
        desc: "首页主要内容",
        path: 'home-page',
        name: 'home-page',
        component: HomePage,
      },
      {
        desc: "核心技术",
        path: 'technology',
        name: 'technology',
        component: Technology,
      },
      {
        desc: "智能穿戴解决方案",
        path: 'wear',
        name: 'wear',
        component: Wear,
      },
      {
        desc: "智能会议解决方案",
        path: 'meeting',
        name: 'meeting',
        component: Meeting,
      },
      {
        desc: "智慧金融解决方案",
        path: 'banking',
        name: 'banking',
        component: Banking,
      },
      {
        desc: "课中英语口语评测综合解决方案",
        path: 'english',
        name: 'english',
        component: English,
      },
      {
        desc: "智慧教室解决方案",
        path: 'classroom',
        name: 'classroom',
        component: Classroom,
      },
      {
        desc: "公司介绍",
        path: 'introduce',
        name: 'introduce',
        component: Introduce,
      },
      {
        desc: "加入|联系我们",
        path: 'contact',
        name: 'contact',
        component: Contact,
      },
      {
        desc: "智能终端综合解决方案",
        path: 'terminal',
        name: 'terminal',
        component: Terminal,
      },
      {
        desc: "MetaBrain",
        path: 'metabrain',
        name: 'metabrain',
        component: MetaBrain,
      },
      {
        desc: "智慧安防综合解决方案",
        path: 'security',
        name: 'security',
        component: Security,
      },
      {
        desc: "智慧军工综合解决方案",
        path: 'warindustry',
        name: 'warindustry',
        component: WarIndustry,
      },
      {
        desc: "三个课堂建设方案",
        path: 'threeclass',
        name: 'threeclass',
        component: ThreeClass,
      },
      {
        desc: "校园安防综合解决方案",
        path: 'campussecurity',
        name: 'campussecurity',
        component: CampusSecurity,
      },
    ],
  }
];
const router = new Router({
  mode: 'history',
  routes
});
export default router
