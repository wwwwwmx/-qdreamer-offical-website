<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:26
 * @LastEditTime: 2022-01-17 20:16:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\Footer.vue
-->
<template>
  <div class="technology">
    <div class="technology-header">
      <iframe class="star" src="/static/jQuery3dxk/index.html" frameborder="0"></iframe>
      <div class="title" data-aos="zoom-in" data-aos-duration="1000">
        <img src="~assets/img/technology/header/up.png" alt="" />
        <span>奇梦者拥有完整自主知识产权</span>
      </div>
    </div>
    
    <div class="technology-signal">
      <div class="signal-header">
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">信号技术</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">SIGNAL TECHNOLOGY</span>
      </div>
      <div class="signal-container">
        <img
          class="signal-left"
          src="~assets/img/technology/signal/img1.gif"
          alt=""
        />
        <div class="signal-right">
          <img class="gif" src="~assets/img/technology/signal/gif.gif" alt="" />
          <div
            :class="item.class"
            :key="index"
            v-for="(item, index) in signalList"
          >
            <div class="circle">
              <img :class="item.imgClass" :src="item.img" alt="" />
            </div>
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="technology-analysis">
      <div
        class="analysis-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">语音分析</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">SPEECH ANALYSIS</span>
      </div>
      <div
        class="analysis-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="analysis-left">
          <div class="box" :key="index" v-for="(item, index) in analysisList">
            <div class="circle">
              <img :src="item.img" alt="" />
            </div>
            <span>{{ item.text }}</span>
          </div>
        </div>
        <img
          class="analysis-right"
          src="~assets/img/technology/analysis/img1.gif"
          alt=""
        />
      </div>
    </div>
    <div class="technology-image">
      <div
        class="image-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">图像分析</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">IMAGE ANALYSIS</span>
      </div>
      <div
        class="image-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in imageList">
          <div class="circle">
            <img :src="item.img" alt="" />
          </div>
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="technology-technique">
      <div
        class="technique-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">超声技术</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">ULTRASONIC TECHNOLOGY</span>
      </div>
      <div
        class="technique-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img
          class="technique-left"
          src="~assets/img/technology/technique/img1.gif"
          alt=""
        />
        <div class="technique-right">
          <div class="box" :key="index" v-for="(item, index) in techniqueList">
            <div class="circle">
              <img :class="item.imgClass" :src="item.img" alt="" />
            </div>
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//aos.js是一款效果超赞的页面滚动元素动画jQuery动画库插件
import AOS from "aos";
export default {
  data() {
    return {
      signalList: [
        {
          class: "box1",
          imgClass: "img1",
          img: require("assets/img/technology/signal/icon1.png"),
          text: "回声消除",
        },
        {
          class: "box2",
          imgClass: "img2",
          img: require("assets/img/technology/signal/icon2.png"),
          text: "混响抑制",
        },
        {
          class: "box3",
          imgClass: "img3",
          img: require("assets/img/technology/signal/icon3.png"),
          text: "人声分离",
        },
        {
          class: "box4",
          imgClass: "img4",
          img: require("assets/img/technology/signal/icon4.png"),
          text: "智能音幕",
        },
        {
          class: "box5",
          imgClass: "img5",
          img: require("assets/img/technology/signal/icon5.png"),
          text: "声纹降噪",
        },
        {
          class: "box6",
          imgClass: "img6",
          img: require("assets/img/technology/signal/icon6.png"),
          text: "远场拾音",
        },
        {
          class: "box7",
          imgClass: "img7",
          img: require("assets/img/technology/signal/icon7.png"),
          text: "阵列级联",
        },
        {
          class: "box8",
          imgClass: "img8",
          img: require("assets/img/technology/signal/icon8.png"),
          text: "声源定位",
        },
        {
          class: "box9",
          imgClass: "img9",
          img: require("assets/img/technology/signal/icon9.png"),
          text: "AI降噪",
        },
      ],
      analysisList: [
        {
          img: require("assets/img/technology/analysis/icon1.png"),
          text: "语音唤醒",
        },
        {
          img: require("assets/img/technology/analysis/icon2.png"),
          text: "声纹唤醒",
        },
        {
          img: require("assets/img/technology/analysis/icon3.png"),
          text: "声纹识别",
        },
        {
          img: require("assets/img/technology/analysis/icon4.png"),
          text: "语音检测",
        },
        {
          img: require("assets/img/technology/analysis/icon5.png"),
          text: "语音识别",
        },
        {
          img: require("assets/img/technology/analysis/icon6.png"),
          text: "语音合成",
        },
        {
          img: require("assets/img/technology/analysis/icon7.png"),
          text: "口语考试",
        },
        {
          img: require("assets/img/technology/analysis/icon8.png"),
          text: "口语评测",
        },
        {
          img: require("assets/img/technology/analysis/icon9.png"),
          text: "语言理解",
        },
      ],
      imageList: [
        {
          img: require("assets/img/technology/image/icon1.png"),
          text: "人脸检测",
        },
        {
          img: require("assets/img/technology/image/icon2.png"),
          text: "人脸识别",
        },
        {
          img: require("assets/img/technology/image/icon3.png"),
          text: "唇动识别",
        },
        {
          img: require("assets/img/technology/image/icon4.png"),
          text: "唇语识别",
        },
        {
          img: require("assets/img/technology/image/icon5.png"),
          text: "人形检测",
        },
        {
          img: require("assets/img/technology/image/icon6.png"),
          text: "动作识别",
        },
      ],
      techniqueList: [
        {
          imgClass: "img1",
          img: require("assets/img/technology/technique/icon1.png"),
          text: "被动触控",
        },
        {
          imgClass: "img2",
          img: require("assets/img/technology/technique/icon2.png"),
          text: "主动触控",
        },
        {
          imgClass: "img3",
          img: require("assets/img/technology/technique/icon3.png"),
          text: "动作检测",
        },
        {
          imgClass: "img4",
          img: require("assets/img/technology/technique/icon4.png"),
          text: "动作识别",
        },
        {
          imgClass: "img5",
          img: require("assets/img/technology/technique/icon5.png"),
          text: "超声雷达",
        },
        {
          imgClass: "img6",
          img: require("assets/img/technology/technique/icon6.png"),
          text: "超声检测",
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
.technology {
  .technology-header {
    height: 540px;
    // background-size: cover;
    // background-position: 50%;
    // background-repeat: no-repeat;
    // background-image: url(~assets/img/homepage/header/background.png);
    background-color: #1b2382;
    margin-bottom: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .star {
      width: 100%;
      height: 540px;
      position: absolute;
    }
    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 670px;
        margin-bottom: 40px;
      }
      span {
        font-size: 36px;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
  .technology-signal {
    margin-bottom: 47px;
    .signal-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      text-align: center;
      margin-bottom: 38px;
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
    .signal-container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 47px;
      .signal-left {
        width: 627px;
        height: 336px;
      }
      .signal-right {
        width: 463px;
        height: 467px;
        position: relative;
        .gif {
          width: 216px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate((-50%, -50%));
        }
        .box1,
        .box2,
        .box3,
        .box4,
        .box5,
        .box6,
        .box7,
        .box8,
        .box9 {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          .circle {
            width: 65px;
            height: 65px;
            background: #ffffff;
            box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.22);
            border-radius: 50%;
            margin-bottom: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            .img1 {
              width: 36px;
              height: 31px;
            }
            .img2 {
              width: 49px;
              height: 29px;
            }
            .img3 {
              width: 36px;
              height: 36px;
            }
            .img4 {
              width: 35px;
              height: 35px;
            }
            .img5 {
              width: 36px;
              height: 33px;
            }
            .img6 {
              width: 36px;
              height: 31px;
            }
            .img7 {
              width: 33px;
              height: 33px;
            }
            .img8 {
              width: 36px;
              height: 33px;
            }
            .img9 {
              width: 39px;
              height: 29px;
            }
          }
          span {
            font-size: 20px;
            font-weight: 400;
            color: #333333;
            line-height: 24px;
          }
        }
        .box1 {
          top: 5px;
          left: 50%;
          transform: translate(-50%);
        }
        .box2 {
          top: 50px;
          right: 66px;
        }
        .box3 {
          top: 165px;
          right: 0;
        }
        .box4 {
          right: 23px;
          bottom: 83px;
        }
        .box5 {
          bottom: 0;
          right: 134px;
        }
        .box6 {
          bottom: 0;
          left: 125px;
        }
        .box7 {
          left: 25px;
          bottom: 83px;
        }
        .box8 {
          top: 165px;
        }
        .box9 {
          left: 76px;
          top: 50px;
        }
      }
    }
  }
  .technology-analysis {
    overflow: hidden;
    background: rgba(220, 220, 220, 0.25);
    .analysis-header {
      width: 700px;
      height: 90px;
      margin: 50px auto;
      margin-bottom: 65px;
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
    .analysis-container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-bottom: 50px;
      .analysis-left {
        width: 480px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(4),
          &:nth-child(5),
          &:nth-child(7),
          &:nth-child(8) {
            margin-right: 104px;
          }
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4),
          &:nth-child(5),
          &:nth-child(6) {
            margin-bottom: 41px;
          }
          .circle {
            width: 90px;
            height: 90px;
            background: #ffffff;
            box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.22);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 5px;
            img {
              width: 58px;
              height: 51px;
            }
          }
          span {
            font-size: 20px;
            font-weight: 400;
            color: #333333;
            line-height: 24px;
          }
        }
      }
      .analysis-right {
        width: 715px;
        position: absolute;
        right: 0;
        top: -46px;
      }
    }
  }
  .technology-image {
    overflow: hidden;
    .image-header {
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
    .image-container {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .box {
        width: 347px;
        height: 148px;
        background: rgba(220, 220, 220, 0.25);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin-bottom: 50px;
        }
        .circle {
          width: 100px;
          height: 100px;
          background: #ffffff;
          box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.14);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 45px;
          img {
            width: 63px;
            height: 64px;
          }
        }
        span {
          font-size: 30px;
          font-weight: 500;
          color: #333333;
          line-height: 24px;
        }
      }
    }
  }
  .technology-technique {
    overflow: hidden;
    background: rgba(220, 220, 220, 0.25);
    .technique-header {
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
    .technique-container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
      .technique-left {
        width: 546px;
        height: 411px;
      }
      .technique-right {
        width: 550px;
        height: 320px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(4),
          &:nth-child(5) {
            margin-right: 120px;
          }
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3) {
            margin-bottom: 64px;
          }
          .circle {
            width: 100px;
            height: 100px;
            border: 1px solid #0077f7;
            box-shadow: 0px 0px 4px 0px #0077f7;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 5px;
            .img1,
            .img2 {
              width: 41px;
            }
            .img3,
            .img4,
            .img5,
            .img6 {
              width: 49px;
              height: 49px;
            }
          }
          span {
            font-size: 22px;
            font-weight: 400;
            color: #333333;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>