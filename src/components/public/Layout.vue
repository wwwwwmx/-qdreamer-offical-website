<!--
 * @Author: your name
 * @Date: 2021-11-04 15:16:48
 * @LastEditTime: 2021-11-05 17:32:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\Layout.vue
-->
<template>
  <el-container class="con-father">
    <el-header>
      <nav-top></nav-top>
    </el-header>
    <el-main class="body-main">
      <div class="filter" @click="closeSel" v-show="isShow"></div>
      <div class="contactus">
        <img class="M" src="~assets/img/public/M.png" alt />
        <div class="text-father" @click="handleShow()" id="in">
          <span class="text">点我联系</span>
        </div>
        <div class="triangle1" v-show="isShow"></div>
        <div class="click-father" v-show="isShow">
          <img
            @mouseenter="isPhoneShow = true"
            @mouseleave="isPhoneShow = false"
            src="~assets/img/public/phone.png"
            alt
          />
          <div v-show="isPhoneShow" class="phone">张先生：18015407936</div>
          <div v-show="isPhoneShow" class="triangle2"></div>
          <img
            @mouseenter="isWechatShow = true"
            @mouseleave="isWechatShow = false"
            src="~assets/img/public/wechat.png"
            alt
          />
          <img v-show="isWechatShow" class="code" src="~assets/img/public/code.png" alt />
        </div>
      </div>
      <!-- <transition
        appear
        appear-class="page-appear"
        appear-to-class="page-appear-to"
        appear-active-class="page-appear-active"
        mode="in-out"
      > -->
        <router-view></router-view>
      <!-- </transition> -->
    </el-main>
    <el-footer class="footer cd">
      <Footer />
    </el-footer>
  </el-container>
</template>
<script>
import Footer from "./Footer.vue";
import NavTop from "./NavTop.vue";
export default {
  data() {
    return {
      isShow: false,
      isPhoneShow: false,
      isWechatShow: false,
    };
  },
  components: {
    Footer,
    NavTop,
  },
  methods: {
    handleShow() {
      this.isShow = !this.isShow;
    },
    closeSel(event) {
      let currentCli = document.getElementById("in");
      if (currentCli) {
        if (!currentCli.contains(event.target)) {
          //点击到了id为sellineName以外的区域，隐藏下拉框
          this.isShow = false;
        }
      }
    },
  },
  created() {},
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>
<style lang="scss" scoped>
.con-father {
  // width:  calc(100% - 17px);
  min-width: 1240px;
  .el-header {
    padding: 0;
  }
  .footer {
    padding: 0;
  }
  .body-main {
    padding: 0;
    padding-top: 20px;
    position: relative;
    // overflow: hidden;
    .page-appear{
      opacity: 0.3;
    }
    .page-appear-active{
      transition: opacity .5s;
    }
    .page-appear-to{
      opacity: 1;
    }
    // .fade-enter,.fade-leave-to{
      
    // }
    // .fade-enter-active,.fade-leave-active{

    // }
    // .fade-enter-to,.fade-leave{

    // }
    .filter {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
    }
    .contactus {
      width: 120px;
      height: 225px;
      position: fixed;
      right: 0;
      top: 55%;
      transform: translateY(-50%);
      z-index: 2000;
      display: flex;
      flex-direction: column;
      align-items: center;
      .M {
        width: 102px;
        height: 80px;
        margin-bottom: 9px;
      }
      .text-father {
        width: 100%;
        height: 38px;
        background: #e5e5e5;
        border-radius: 19px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 7px;
        cursor: pointer;
        .text {
          font-size: 20px;
          font-weight: 400;
          color: #333333;
          line-height: 24px;
        }
      }
      .triangle1 {
        width: 0;
        height: 0;
        border-right: 7px solid transparent;
        border-left: 7px solid transparent;
        border-bottom: 10px solid #e5e5e5;
      }
      .click-father {
        width: 48px;
        background: #e5e5e5;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-top: -1px;
        img {
          &:first-child {
            width: 17px;
            margin-top: 9px;
            margin-bottom: 18px;
          }
          &:nth-child(4) {
            width: 21px;
            margin-bottom: 9px;
          }
        }
        .phone {
          width: 223px;
          height: 30px;
          background: #e5e5e5;
          border-radius: 2px;
          font-size: 18px;
          font-weight: 400;
          color: #333333;
          line-height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 10px;
          left: -240px;
        }
        .triangle2 {
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-left: 9px solid #e5e5e5;
          border-bottom: 6px solid transparent;
          position: absolute;
          top: 20px;
          left: -17px;
        }
        .code {
          width: 82px;
          height: 82px;
          position: absolute;
          left: -76px;
          top: 18px;
        }
      }
    }
  }
}
</style>