<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:13
 * @LastEditTime: 2021-11-05 17:55:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\NavTop.vue
-->
<template>
  <div class="security">
    <div class="security-header">
      <iframe src="/static/jqueryparticles/index.html" frameborder="0"></iframe>
      <div class="title-box">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          src="~assets/img/security/header/text.png"
          alt=""
        />
      </div>
    </div>
    <div class="security-introduce">
      <img src="~assets/img/security/introduce/img1.gif" alt="" />
      <span
        >依托奇梦者的云数据中心及安防平台，构建云+端的公共安全安防体系，给管理社区、街道、校园等各行各业提供有力支撑，从而建设美好安全家园。</span
      >
    </div>
    <div class="security-camera">
      <div
        class="camera-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">麦克风阵列监控摄像头</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <p class="text">
          增加了8麦双环阵列，将音频技术和视频技术融合更好的提供安全服务，进一步提升目前的安防系统的智能化能力
        </p>
      </div>
      <div
        class="camera-circle"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <span class="text1">8麦<br />双环阵列</span>
        <span class="text2">4k摄像头</span>
        <span class="text3">超远距人声<br />分离与追踪</span>
        <span class="text4">声随影动</span>
        <span class="text5">声随人动</span>
        <span class="text6">影随声动</span>
        <span class="text7">影随人动</span>
        <span class="text8">危害的<br />敏感词检测</span>
        <span class="text9">20m<br />超远距拾音</span>
        <img src="../assets/img/security/camera/camera.png" alt="" />
      </div>
    </div>
    <div class="security-peculiarity">
      <div
        class="peculiarity-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span>功能特性</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">FUNCTIONAL CHARACTERISTICS</span>
      </div>
      <div
        class="peculiarity-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div :class="item.box" :key="index" v-for="(item, index) in boxList">
          <img :src="item.img" alt="" />
          <div class="content">
            <span class="title">{{ item.title }}</span>
            <span class="text">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="security-framework">
      <div
        class="framework-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span>安防架构</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">BENCHMARKING CUSTOMER</span>
      </div>
      <div
        class="img"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      ></div>
    </div>
    <div class="security-scene">
      <div
        class="scene-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span>应用场景</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">APPLICATION SCENARIO</span>
      </div>
      <div
        class="scene-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in sceneList">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="text">
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="security-customer">
      <div
        class="customer-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span>标杆客户</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">APPLICATION SCENARIO</span>
      </div>
      <div
        class="customer-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img
          :src="item.img"
          :key="index"
          v-for="(item, index) in customerList"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
export default {
  data() {
    return {
      boxList: [
        {
          box: "box1",
          img: require("assets/img/security/peculiarity/icon1.png"),
          title: "检测敏感词",
          text: "检测到“救命”、“着火啦”等敏感词，会蜂鸣报警，及时通知警方",
        },
        {
          box: "box2",
          img: require("assets/img/security/peculiarity/icon2.png"),
          title: "实时追踪定位",
          text: "实时追踪犯罪人的位置，位置实时共享给警方",
        },
        {
          box: "box3",
          img: require("assets/img/security/peculiarity/icon3.png"),
          title: "安防后台分析",
          text: "通过人脸识别与声纹识别检测犯罪人的基本信息，同时分析犯罪人的逃跑路线",
        },
      ],
      sceneList: [
        {
          img: require("assets/img/security/scene/img1.png"),
          text: "社区",
        },
        {
          img: require("assets/img/security/scene/img2.png"),
          text: "街道",
        },
        {
          img: require("assets/img/security/scene/img3.png"),
          text: "校园",
        },
      ],
      customerList: [
        {
          img: require("assets/img/security/customer/img1.png"),
        },
        {
          img: require("assets/img/security/customer/img2.png"),
        },
        {
          img: require("assets/img/security/customer/img3.png"),
        },
      ],
    };
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
.security {
  .security-header {
    height: 540px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(~assets/img/security/header/background.png);
    margin-bottom: 50px;
    position: relative;
    iframe {
      width: 100%;
      height: 540px;
      position: absolute;
    }
    .title-box {
      width: 100%;
      height: 200px;
      border-top: 4px solid #ffffff;
      border-image: linear-gradient(
          -270deg,
          rgba(255, 255, 255, 0) 25%,
          #ffffff 50%,
          rgba(255, 255, 255, 0) 75%
        )
        2 2 2 2;
      border-bottom: 4px solid #ffffff;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      img {
        width: 738px;
      }
    }
  }
  .security-introduce {
    margin-bottom: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 51px;
    img {
      width: 465px;
      height: 280px;
    }
    span {
      width: 691px;
      font-size: 30px;
      font-weight: 400;
      color: #333333;
      line-height: 45px;
      letter-spacing: 1px;
      margin-left: 44px;
    }
  }
  .security-camera {
    overflow: hidden;
    .camera-header {
      width: 1200px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 50px;
      text-align: center;
      img {
        width: 197px;
        height: 24px;
        &:nth-child(3) {
          width: 206px;
          height: 29px;
        }
      }
      .title {
        display: inline-block;
        font-size: 48px;
        font-weight: 400;
        color: #333333;
        line-height: 48px;
        margin: 0 20px 20px 20px;
      }
      .text {
        font-size: 24px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
      }
    }
    .camera-circle {
      width: 800px;
      height: 780px;
      margin: 0 auto;
      margin-bottom: 30px;
      position: relative;
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 145px;
        height: 145px;
        border: 3px dotted #333333;
        border-radius: 50%;
        font-size: 22px;
        font-weight: 500;
        color: #333333;
        position: absolute;
      }
      .text1 {
        left: 50%;
        transform: translateX(-50%);
      }
      .text2 {
        right: 116px;
        top: 77px;
      }
      .text3 {
        right: 0;
        top: 265px;
      }
      .text4 {
        right: 37px;
        bottom: 180px;
      }
      .text5 {
        right: 208px;
        bottom: 20px;
      }
      .text6 {
        left: 210px;
        bottom: 20px;
      }
      .text7 {
        left: 67px;
        bottom: 180px;
      }
      .text8 {
        left: 0;
        top: 267px;
      }
      .text9 {
        left: 118px;
        top: 77px;
      }
      img {
        width: 370px;
        object-fit: contain;
        height: 209px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .security-peculiarity {
    background: rgba(220, 220, 220, 0.25);
    overflow: hidden;
    margin-bottom: 50px;
    .peculiarity-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-top: 50px;
      margin-bottom: 17px;
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
    .peculiarity-container {
      height: 450px;
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .box1,
      .box3 {
        width: 981px;
        height: 150px;
        border: 1px solid #959595;
        border-right: 0;
        border-radius: 75px 0 0 75px;
        margin-right: 69px;
        display: flex;
        align-items: center;
        img {
          width: 65px;
          height: 60px;
          margin-left: 20px;
        }
      }
      .box2 {
        width: 982px;
        height: 150px;
        border: 1px solid #959595;
        border-left: 0;
        border-radius: 0 75px 75px 0;
        margin-left: 69px;
        margin-top: -1px;
        margin-bottom: -1px;
        display: flex;
        align-items: center;
        img {
          width: 65px;
          height: 81px;
          margin-right: 21px;
        }
      }
      .box3 {
        img {
          width: 73px;
          height: 73px;
        }
      }
      .box1,
      .box2,
      .box3 {
        display: flex;
        .content {
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .title {
            font-size: 30px;
            font-weight: 400;
            margin-bottom: 12px;
          }
          .text {
            font-size: 20px;
            font-weight: 400;
          }
        }
      }
      .box2 {
        flex-direction: row-reverse;
        .content {
          text-align: right;
          margin-right: 20px;
        }
      }
    }
  }
  .security-framework {
    overflow: hidden;
    .framework-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 48px;
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
      width: 1052px;
      height: 907px;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(~assets/img/security/framework/img1.png);
      margin: 0 auto;
      margin-bottom: 50px;
    }
  }
  .security-scene {
    background: rgba(220, 220, 220, 0.25);
    overflow: hidden;
    margin-bottom: 50px;
    .scene-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-top: 51px;
      margin-bottom: 49px;
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
    .scene-container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .box {
        width: 380px;
        height: 500px;
        background: #ffffff;
        box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        &:hover {
          .img {
            img {
              transform: scale(1.2);
            }
          }
        }
        .img {
          width: 380px;
          overflow: hidden;
          border-radius: 2%;
          img {
            width: 100%;
            transition: all 0.6s;
          }
        }
        .text {
          height: 79px;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            font-size: 40px;
            font-weight: 500;
            color: #1b2382;
          }
        }
      }
    }
  }
  .security-customer {
    overflow: hidden;
    .customer-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 36px;
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
    .customer-container {
      width: 700px;
      margin: 0 auto;
      text-align: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
      img {
        width: 170px;
        height: 80px;
      }
    }
  }
}
</style>