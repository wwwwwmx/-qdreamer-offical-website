<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:26
 * @LastEditTime: 2022-01-17 20:16:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\Footer.vue
-->
<template>
  <div class="banking">
    <div class="banking-header">
      <div class="circle1">
        <img class="img1" src="~assets/img/banking/header/img1.png" alt="" />
        <img class="img2" src="~assets/img/banking/header/img2.png" alt="" />
        <img class="img3" src="~assets/img/banking/header/img3.png" alt="" />
        <img class="img4" src="~assets/img/banking/header/img4.png" alt="" />
        <img
          class="downimg1"
          src="~assets/img/banking/header/img1.png"
          alt=""
        />
        <img
          class="downimg2"
          src="~assets/img/banking/header/img2.png"
          alt=""
        />
        <img
          class="downimg3"
          src="~assets/img/banking/header/img3.png"
          alt=""
        />
        <img
          class="downimg4"
          src="~assets/img/banking/header/img4.png"
          alt=""
        />
        <div class="circle2">
          <img class="img5" src="~assets/img/banking/header/img5.png" alt="" />
          <img class="img6" src="~assets/img/banking/header/img6.png" alt="" />
          <img
            class="downimg5"
            src="~assets/img/banking/header/img5.png"
            alt=""
          />
          <img
            class="downimg6"
            src="~assets/img/banking/header/img6.png"
            alt=""
          />
          <div class="circle3">
            <img
              class="img7"
              src="~assets/img/banking/header/img7.png"
              alt=""
            />
            <img
              class="img8"
              src="~assets/img/banking/header/img8.png"
              alt=""
            />
            <img
              class="downimg7"
              src="~assets/img/banking/header/img7.png"
              alt=""
            />
            <img
              class="downimg8"
              src="~assets/img/banking/header/img8.png"
              alt=""
            />
            <div class="circle4">
              <img
                class="img9"
                src="~assets/img/banking/header/img9.png"
                alt=""
              />
              <img
                class="downimg9"
                src="~assets/img/banking/header/img9.png"
                alt=""
              />down
            </div>
          </div>
        </div>
      </div>
      <div class="header" data-aos="zoom-in" data-aos-duration="1000">
        <img class="up" src="~assets/img/banking/header/up.png" alt="" />
        <img
          class="bottom"
          src="~assets/img/banking/header/bottom.png"
          alt=""
        />
      </div>
    </div>
    <div class="banking-introduce">
      <img src="~assets/img/banking/introduce/img1.gif" alt="" />
      <span
        >奇梦者面向智慧终端提供一站式全链路云+端软硬件语音交互技术解决方案，解决柜员机在复杂环境下的有效语音拾取、语音识别、语义理解、语音合成的问题，帮助柜员机针对不同业务提供定制化的交互技术解决方案，帮助客户便捷办理业务，提升用户体验。</span
      >
    </div>
    <div class="banking-points">
      <div
        class="points-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" />
        <span class="title">行业痛点</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">INDUSTRY PAIN POINTS</span>
      </div>
      <div
        class="points-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in pointsList">
          <img :src="item.img" alt="" />
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="banking-advantage">
      <div
        class="advantage-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" />
        <span class="title">方案优势</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">PROGRAM ADVANTAGES</span>
      </div>
      <div
        class="advantage-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in advantageList">
          <img :class="item.imgClass" :src="item.img" alt="" />
          <span class="title">{{ item.title }}</span>
          <span :class="item.textClass">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="banking-sensor">
      <div
        class="sensor-title"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        为了解决场景数字化技术问题，定制支持了算法适配的音视频传感器
      </div>
      <div
        class="sensor-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img
          src="~assets/img/banking/sensor/img1.png"
          alt=""
          class="container-left"
        />
        <div class="container-right">
          <div class="box" :key="index" v-for="(item, index) in sensorList">
            <div class="point"></div>
            <span class="text">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="banking-scene">
      <div
        class="scene-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" />
        <span class="title">应用场景</span>
        <img src="~assets/img/security/header/right.png" />
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
          <div class="text-box">
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="banking-customer">
      <div
        class="customer-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" />
        <span class="title">标杆客户</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">BENCHMARKING CUSTOMER</span>
      </div>
      <div
        class="customer-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img
          :src="item.img"
          alt=""
          :key="index"
          v-for="(item, index) in customerList"
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
      pointsList: [
        {
          img: require("assets/img/banking/points/img1.png"),
          text: "销售场景音视频存频、数字化文本存档",
        },
        {
          img: require("assets/img/banking/points/img2.png"),
          text: "服务话术分析",
        },
        {
          img: require("assets/img/banking/points/img3.png"),
          text: "顾客用户画像",
        },
        {
          img: require("assets/img/banking/points/img4.png"),
          text: "业务营运建议",
        },
      ],
      advantageList: [
        {
          imgClass: "img1",
          img: require("assets/img/banking/advantage/img1.png"),
          title: "智能PAD",
          textClass: "text1",
          text: "录音并记录人声，通过语音识别数字化",
        },
        {
          imgClass: "img2",
          img: require("assets/img/banking/advantage/img2.png"),
          title: "销售人员客户端",
          textClass: "text2",
          text: "销售人员场景数据存档预览、检索",
        },
        {
          imgClass: "img3",
          img: require("assets/img/banking/advantage/img3.png"),
          title: "机构数据服务系统",
          textClass: "text3",
          text: "汇总机构一线业务人员数据，依据业务场景对业务数据追踪分析",
        },
      ],
      sensorList: [
        {
          text: "支持5G",
        },
        {
          text: "画面同框，前摄支持广角，支持2人同框拍摄",
        },
        {
          text: "视频双录，前后摄像头能够同时工作，独立保存视频",
        },
        {
          text: "音频双录，环形4麦克风阵列，能够在多人会议场景下实时分离人声",
        },
        {
          text: "支持指纹识别、金融卡识别、身份证识别、社保卡识别",
        },
      ],
      sceneList: [
        {
          img: require("assets/img/banking/scene/img1.png"),
          text: "智慧柜员机",
        },
        {
          img: require("assets/img/banking/scene/img2.png"),
          text: "自主发卡机",
        },
        {
          img: require("assets/img/banking/scene/img3.png"),
          text: "ATM",
        },
      ],
      customerList: [
        {
          img: require("assets/img/banking/customer/img1.png"),
        },
        {
          img: require("assets/img/banking/customer/img2.png"),
        },
        {
          img: require("assets/img/banking/customer/img3.png"),
        },
        {
          img: require("assets/img/banking/customer/img4.png"),
        },
        {
          img: require("assets/img/banking/customer/img5.png"),
        },
        {
          img: require("assets/img/banking/customer/img6.png"),
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
.banking {
  .banking-header {
    height: 540px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(~assets/img/banking/header/background.png);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin-bottom: 50px;
    .circle1 {
      width: 1354px;
      height: 1354px;
      border: 1px solid #3d4bd2;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -6%;
      animation: rotate 30s linear infinite;
      @keyframes rotate {
        100% {
          transform: rotate(1turn);
        }
      }
      img {
        width: 213px;
        position: absolute;
        animation: imgrotate 30s linear infinite;
        @keyframes imgrotate {
          100% {
            transform: rotate(-1turn);
          }
        }
      }
      .img1 {
        top: 26.5%;
        left: -6.5%;
      }
      .downimg1 {
        bottom: 26.5%;
        right: -6.5%;
      }
      .img2 {
        top: 3%;
        left: 9%;
      }
      .downimg2 {
        bottom: 3%;
        right: 9%;
      }
      .img3 {
        top: 7.5%;
        right: 5%;
      }
      .downimg3 {
        bottom: 7.5%;
        left: 5%;
      }
      .img4 {
        top: 26.5%;
        right: -6%;
      }
      .downimg4 {
        bottom: 26.5%;
        left: -6%;
      }
      .circle2 {
        width: 1118px;
        height: 1118px;
        border: 1px solid #3d4bd2;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 9%;
        .img5 {
          top: 12%;
          left: 0;
        }
        .downimg5 {
          bottom: 12%;
          right: 0;
        }
        .img6 {
          top: -10%;
        }
        .downimg6 {
          bottom: -10%;
        }
        .circle3 {
          width: 883px;
          height: 883px;
          border: 1px solid #3d4bd2;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          .img7 {
            top: -8%;
            left: 15%;
          }
          .downimg7 {
            bottom: -8%;
            right: 15%;
          }
          .img8 {
            top: -6%;
            right: 13%;
          }
          .downimg8 {
            bottom: -6%;
            left: 13%;
          }
          .circle4 {
            width: 615px;
            height: 615px;
            border: 1px solid #3d4bd2;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin-top: -35px;
            .img9 {
              top: -16%;
            }
            .downimg9 {
              bottom: -16%;
            }
          }
        }
      }
    }
    .header {
      width: 800px;
      height: 172px;
      position: relative;
      .up {
        width: 800px;
        position: absolute;
        top: 0;
      }
      .bottom {
        width: 690px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
  .banking-introduce {
    width: 1150px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 42px;
    img {
      width: 462px;
      height: 307px;
    }
    span {
      width: 585px;
      font-size: 28px;
      font-weight: 400;
      color: #333333;
      line-height: 45px;
      letter-spacing: 1px;
    }
  }
  .banking-points {
    overflow: hidden;
    background: rgba(220, 220, 220, 0.25);
    margin-bottom: 50px;
    .points-header {
      width: 700px;
      height: 90px;
      margin: 50px auto;
      margin-bottom: 43px;
      text-align: center;
      .title {
        font-size: 48px;
        font-weight: 400;
        color: #333333;
        line-height: 48px;
        display: inline-block;
        margin: 0 20px 15px 20px;
      }
      img {
        width: 197px;
        height: 24px;
        &:nth-child(3) {
          width: 206px;
          height: 29px;
        }
      }
      .english {
        font-size: 24px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
      }
    }
    .points-container {
      width: 1200px;
      padding: 0 75px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-bottom: 46px;
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        &:first-child {
          span {
            width: 216px;
          }
        }
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          justify-content: space-between;
          span {
            margin-bottom: 30px;
          }
        }
        img {
          width: 135px;
          height: 135px;
          margin-bottom: 20px;
        }
        span {
          font-size: 24px;
          font-weight: 400;
          color: #333333;
          line-height: 30px;
        }
      }
    }
  }
  .banking-advantage {
    overflow: hidden;
    .advantage-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 43px;
      text-align: center;
      .title {
        font-size: 48px;
        font-weight: 400;
        color: #333333;
        line-height: 48px;
        display: inline-block;
        margin: 0 20px 15px 20px;
      }
      img {
        width: 197px;
        height: 24px;
        &:nth-child(3) {
          width: 206px;
          height: 29px;
        }
      }
      .english {
        font-size: 24px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
      }
    }
    .advantage-container {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 50px;
      display: flex;
      justify-content: space-between;
      .box {
        width: 380px;
        height: 250px;
        background: #0077f7;
        box-shadow: 0px 0px 19px 2px rgba(0, 0, 0, 0.14);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
        .img1 {
          width: 73px;
          height: 60px;
        }
        .img2 {
          margin-top: 1px;
          width: 71px;
          height: 64px;
        }
        .img3 {
          margin-top: 27px;
          width: 63px;
          height: 63px;
        }
        .img1,
        .img2,
        .img3 {
          margin-bottom: 24px;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 13px;
        }
        .text1,
        .text2,
        .text3 {
          font-size: 20px;
          font-weight: 400;
          color: #ffffff;
        }
        .text1,
        .text2 {
          width: 200px;
        }
        .text3 {
          width: 220px;
        }
      }
    }
  }
  .banking-sensor {
    overflow: hidden;
    margin-bottom: 50px;
    background: rgba(220, 220, 220, 0.25);
    .sensor-title {
      width: 942px;
      margin: 0 auto;
      margin-top: 35px;
      margin-bottom: 40px;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      color: #333333;
    }
    .sensor-container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .container-left {
        width: 500px;
        height: 279px;
        margin-bottom:40px;
      }
      .container-right {
        height: 325px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom:40px;
        .box {
          width: 600px;
          display: flex;
          align-items: center;
          &:nth-child(4) {
            .point {
              width: 12px;
              margin-bottom: 30px;
            }
          }
          .point {
            width: 10px;
            height: 10px;
            background: #000000;
            border-radius: 50%;
            margin-right: 10px;
          }
          .text {
            font-size: 24px;
            font-weight: 400;
            color: #333333;
            line-height: 30px;
          }
        }
      }
    }
  }
  .banking-scene {
    overflow: hidden;
    .scene-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 23px;
      text-align: center;
      .title {
        font-size: 48px;
        font-weight: 400;
        color: #333333;
        line-height: 48px;
        display: inline-block;
        margin: 0 20px 15px 20px;
      }
      img {
        width: 197px;
        height: 24px;
        &:nth-child(3) {
          width: 206px;
          height: 29px;
        }
      }
      .english {
        font-size: 24px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
      }
    }
    .scene-container {
      width: 1154px;
      margin: 0 auto;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      .box {
        width: 396px;
        height: 476px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(~assets/img/banking/scene/shadow.png);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &:nth-child(3) {
          .text-box {
            width: 127px;
          }
        }
        &:hover {
          .img {
            img {
              transform: scale(1.2);
            }
          }
        }
        .img {
          overflow: hidden;
          border-radius: 3%;
          img {
            width: 350px;
            transition: all 0.6s;
          }
        }
        .text-box {
          width: 223px;
          height: 45px;
           background: rgba(255, 255, 255, 0.68);
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          span {
            font-size: 36px;
            font-weight: 400;
            color: #1b2382;
            line-height: 74px;
          }
        }
      }
    }
  }
  .banking-customer {
    overflow: hidden;
    background: rgba(220, 220, 220, 0.25);
    .customer-header {
      width: 700px;
      height: 90px;
      margin: 50px auto;
      margin-bottom: 30px;
      text-align: center;
      .title {
        font-size: 48px;
        font-weight: 400;
        color: #333333;
        line-height: 48px;
        display: inline-block;
        margin: 0 20px 15px 20px;
      }
      img {
        width: 197px;
        height: 24px;
        &:nth-child(3) {
          width: 206px;
          height: 29px;
        }
      }
      .english {
        font-size: 24px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
      }
    }
    .customer-container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-bottom: 36px;
      img {
        width: 150px;
        height: 81px;
      }
    }
  }
}
</style>