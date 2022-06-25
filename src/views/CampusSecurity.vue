<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:13
 * @LastEditTime: 2021-11-05 17:55:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\NavTop.vue
-->
<template>
  <div class="campus-security">
    <div class="campus-header">
      <img
        src="~assets/img/campus-security/header/text.png"
        alt=""
        data-aos="zoom-in"
        data-aos-duration="1000"
      />
    </div>
    <div class="campus-introduce">
      <div class="introduce-container">
        <img src="~assets/img/campus-security/introduce/img1.gif" alt="" />
        <div>
          学校的安全是社会一直关注的问题，创建“平安校园”，让学生们安心读书，家长们放心工作，同时也是教育界的首要责任。针对校园安防建设，奇梦者将校园内加大重点危害区域范围的监控，提供敏感词检测和危险物的图像检测，如遇暴力事件提供一键报警功能，加强校园内紧急事件的防范和应急联动。
        </div>
      </div>
    </div>
    <div class="campus-framework">
      <div
        class="framework-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span>校园安防架构</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">CAMPUS SECURITY ARCHITECHTURE</span>
      </div>
      <div
        class="img"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      ></div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    AOS.init();
    // 你也可以在这里设置全局配置
    AOS.init({
      duration: 1500,
    });
  },
  updated() {},
  destroyed() {},
};
</script>
<style lang="scss" scoped>
.campus-security {
  .campus-header {
    height: 540px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(~assets/img/campus-security/header/background.gif);
    margin-bottom: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 750px;
    }
  }
  .campus-introduce {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 50px;
    .introduce-container {
      width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 450px;
        height: 333px;
      }
      div {
        width: 722px;
        font-size: 30px;
        font-weight: 400;
        color: #333333;
        line-height: 45px;
      }
    }
  }
  .campus-framework {
    background: rgba(220, 220, 220, 0.25);
    overflow: hidden;
    .framework-header {
      width: 772px;
      height: 90px;
      margin: 0 auto;
      margin-top: 50px;
      margin-bottom: 45px;
      text-align: center;
      img {
        width: 197px;
        height: 24px;
        &:nth-child(3) {
          width: 206px;
          height: 29px;
        }
      }
      span {
        display: inline-block;
        font-size: 48px;
        font-weight: 400;
        color: #333333;
        line-height: 48px;
        margin: 0 20px 20px 20px;
      }
      .english {
        font-size: 24px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
      }
    }
    .img {
      width: 1077px;
      height: 600px;
      margin: 0 auto;
      margin-bottom: 44px;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(~assets/img/campus-security/framework/img.png);
    }
  }
}
</style>