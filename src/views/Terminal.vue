<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:13
 * @LastEditTime: 2021-11-05 17:55:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\NavTop.vue
-->
<template>
  <div class="terminal">
    <div class="terminal-header">
      <div class="header" data-aos="zoom-in" data-aos-duration="1000">
        <img class="up" src="~assets/img/terminal/header/up.png" alt="">
        <img class="bottom" src="~assets/img/terminal/header/bottom.png" alt="">
      </div>
    </div>
    <div class="terminal-application">
      <div class="application-header">
        <img src="~assets/img/security/header/left.png" alt="" />
        <span>产品应用</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">PRODUCT APPLICATION</span>
      </div>
      <div class="application-container">
        <div class="box" :key="index" v-for="(item, index) in applicationList">
          <div :class="item.img"></div>
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="terminal-solution">
      <div
        class="solution-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span>解决方案</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">SOLUTION</span>
      </div>
      <carousel
        :contentList="solutionList"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      ></carousel>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
import Carousel from "./public/Carousel.vue";
export default {
  data() {
    return {
      applicationList: [
        {
          img: "img1",
          text: "手机",
        },
        {
          img: "img2",
          text: "平板",
        },
        {
          img: "img3",
          text: "智慧屏",
        },
      ],
      solutionList: [
        {
          img: require("assets/img/terminal/solution/img1.png"),
          title: "语音交互技术解决方案",
          text: "超低功耗唤醒、离线语音、大规模云端语音识别让机器交互更智能。",
        },
        {
          img: require("assets/img/terminal/solution/img2.png"),
          title: "音视频会议解决方案",
          text: "超远距拾音、自适应多模态噪声抑制、超鲁棒混响抑制让会议通信更清晰；声纹、人脸多维度自适应分角色会议转写让会议记录更实用。",
        },
        {
          img: require("assets/img/terminal/solution/img3.png"),
          title: "音视频联动解决方案",
          text: "影随人动、影随声动、声随人动、声随影动让短视频拍摄更智能。",
        },
        {
          img: require("assets/img/terminal/solution/img4.png"),
          title: "超声感知解决方案",
          text: "超声触控让大屏触控成本更低工艺更简单。超声手势识别和环境感知让机器更节能使用更智能。将极大的改变大屏产品形态。",
        },
      ],
    };
  },
  components: { Carousel },
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
.terminal {
  .terminal-header {
    height: 540px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(~assets/img/terminal/header/background.gif);
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      .up {
        width: 750px;
        margin-bottom: 32px;
      }
      .bottom {
        width: 488px;
      }
    }
  }
  .terminal-application {
    overflow: hidden;
    .application-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 46px;
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
    .application-container {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 50px;
      display: flex;
      justify-content: space-between;
      .box {
        width: 380px;
        text-align: center;
        .img1,
        .img2,
        .img3 {
          width: 380px;
          height: 429px;
          background-size: cover;
          background-repeat: no-repeat;
          margin-bottom: 25px;
        }
        .img1 {
          background-image: url(~assets/img/terminal/application/phone.png);
        }
        .img2 {
          background-image: url(~assets/img/terminal/application/board.png);
        }
        .img3 {
          background-image: url(~assets/img/terminal/application/screen.png);
        }
        span {
          font-size: 40px;
          font-weight: 500;
          color: #333333;
          line-height: 40px;
        }
      }
    }
  }
  .terminal-solution {
    background: rgba(220, 220, 220, 0.25);
    overflow: hidden;
    padding-bottom: 38px;
    .solution-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-top: 50px;
      margin-bottom: 5px;
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
  }
}
</style>