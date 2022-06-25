<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:13
 * @LastEditTime: 2021-11-05 17:55:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\NavTop.vue
-->
<template>
  <div class="warindustry">
    <div class="warindustry-header">
      <img
        data-aos="zoom-in"
        data-aos-duration="1000"
        src="~assets/img/warindustry/header/text.png"
        alt=""
      />
    </div>
    <div class="warindustry-introduce">
      <img src="~assets/img/warindustry/introduce/img1.gif" alt="" />
      <span
        >奇梦者设计研发一款高算力、低功耗、低成本的远场拾音识别控制模块，实现语音数据采集、语音信号处理、语音识别和控制输出等功能，可应用于各类机载系统的语音识别解决方案。
      </span>
    </div>
    <div
      class="warindustry-circle"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <span class="text1"
        >尺寸8mm<br />
        x 8mm</span
      >
      <span class="text2">主频><br />200MHZ</span>
      <span class="text3">支持外部NAND内存</span>
      <span class="text4">32位开源RISC-V系统</span>
      <span class="text5">1MB片上SRAM</span>
      <span class="text6">噪声抑制</span>
      <span class="text7">波束形成</span>
      <span class="text8">混响抑制</span>
      <span class="text9">声源定位</span>
      <img src="~assets/img/warindustry/introduce/img2.png" alt="" />
    </div>
    <div class="warindustry-algorithm">
      <div
        class="algorithm-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">核心算法</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <p class="english">CORE ALGORITHM</p>
      </div>
      <div
        class="algorithm-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in algorithmList">
          <img :src="item.img" alt="" />
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
    <!-- <div class="warindustry-application">
      <div
        class="application-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">成功案例</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <p class="english">SUCCESSFUL CASES</p>
      </div>
      <div
        class="application-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in applicationList">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import AOS from "aos";
export default {
  data() {
    return {
      algorithmList: [
        {
          img: require("assets/img/warindustry/algorithm/icon1.png"),
          text: "语音降噪",
        },
        {
          img: require("assets/img/warindustry/algorithm/icon2.png"),
          text: "回声消除",
        },
        {
          img: require("assets/img/warindustry/algorithm/icon3.png"),
          text: "语音唤醒",
        },
        {
          img: require("assets/img/warindustry/algorithm/icon4.png"),
          text: "语音合成",
        },
      ],
      applicationList: [
        {
          img: require("assets/img/warindustry/application/img1.png"),
          text: "歼20",
        },
        {
          img: require("assets/img/warindustry/application/img2.png"),
          text: "宇航服",
        },
        {
          img: require("assets/img/warindustry/application/img3.png"),
          text: "航母",
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
.warindustry {
  .warindustry-header {
    height: 540px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(~assets/img/warindustry/header/background.gif);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    img {
      width: 863px;
    }
  }
  .warindustry-introduce {
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 393px;
    }
    span {
      width: 690px;
      font-size: 30px;
      font-weight: 400;
      color: #333333;
      line-height: 45px;
      letter-spacing: 1px;
      margin-left: 117px;
    }
  }
  .warindustry-circle {
    width: 800px;
    height: 800px;
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
      top: 78px;
    }
    .text3 {
      right: 0;
      top: 265px;
    }
    .text4 {
      right: 37px;
      bottom: 175px;
    }
    .text5 {
      right: 208px;
      bottom: 20px;
    }
    .text6 {
      left: 208px;
      bottom: 20px;
    }
    .text7 {
      left: 37px;
      bottom: 175px;
    }
    .text8 {
      left: 0;
      top: 267px;
    }
    .text9 {
      left: 118px;
      top: 78px;
    }
    img {
      width: 218px;
      height: 218px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .warindustry-algorithm {
    overflow: hidden;
    .algorithm-header {
      width: 1200px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 109px;
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
      .english {
        font-size: 24px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
      }
    }
    .algorithm-container {
      width: 1200px;
      height: 107px;
      background: #ffffff;
      box-shadow: 3px 3px 32px 6px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      margin: 0 auto;
      margin-bottom: 50px;
      display: flex;
      justify-content: space-evenly;
      .box {
        width: 132px;
        height: 148px;
        text-align: center;
        margin-top: -70px;
        img {
          width: 130px;
          margin-bottom: 15px;
        }
        span {
          font-size: 24px;
          font-weight: 400;
          color: #3d485d;
        }
      }
    }
  }
  .warindustry-application {
    background: rgba(220, 220, 220, 0.25);
    overflow: hidden;
    .application-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-top: 50px;
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
        height: 370px;
        background: #ffffff;
        box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        text-align: center;
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
          width: 332px;
          overflow: hidden;
          border-radius: 4%;
          margin-top: 24px;
          margin-bottom: 21px;
          img {
            width: 100%;
            transition: all 0.6s;
          }
        }
        span {
          font-size: 40px;
          font-weight: 500;
          color: #1b2382;
        }
      }
    }
  }
}
</style>