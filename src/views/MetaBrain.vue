<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:13
 * @LastEditTime: 2021-11-05 17:55:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\NavTop.vue
-->
<template>
  <div class="metabrain">
    <div class="metabrain-header">
      <iframe
        v-show="!isShow"
        class="iframe"
        src="/static/canvaslxy/index.html"
        frameborder="0"
      ></iframe>
      <img
        v-show="isShow"
        class="iframe-img"
        src="~assets/img/metabrain/header/background.png"
        alt=""
      />
      <div class="header">
        <span class="title" data-aos="zoom-in" data-aos-duration="1000"
          >MetaBrain</span
        >
        <div class="text-box" data-aos="zoom-in" data-aos-duration="1000">
          <span class="text">多模态人机交互技术解决方案</span>
        </div>
      </div>
    </div>
    <div class="metabrain-introduce">
      <img
        class="introduce"
        src="~assets/img/metabrain/introduce/introduce.gif"
        alt=""
      />
      <span
        >MetaBrain是奇梦者基于自有人工智能技术，构建超带宽麦克风阵列+摄像头的多模态交互硬件体系，融合语音、图像和超声的综合技术，解决电子产品的多维感知、人机交互和场景数字化问题，提供更加便捷人性化的交互体验。</span
      >
    </div>
    <div class="metabrain-solution">
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
        :contentList="metabrain"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      ></carousel>
    </div>
    <div class="metabrain-scene">
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
  </div>
</template>
<script>
import AOS from "aos";
import Carousel from "./public/Carousel.vue";
export default {
  data() {
    return {
      isShow: true,
      metabrain: [
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
      sceneList: [
        {
          img: require("assets/img/metabrain/scene/img1.png"),
          text: "安防",
        },
        {
          img: require("assets/img/metabrain/scene/img2.png"),
          text: "直播",
        },
        {
          img: require("assets/img/metabrain/scene/img3.png"),
          text: "会议",
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
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = false;
      }, 500);
    });
  },
  updated() {},
  destroyed() {},
};
</script>
<style lang="scss" scoped>
.metabrain {
  .metabrain-header {
    height: 540px;
    margin-bottom: 50px;
    position: relative;
    .iframe {
      width: 100%;
      height: 540px;
      position: absolute;
    }
    .iframe-img {
      width: 100%;
      height: 540px;
    }
    .header {
      width: 638px;
      height: 192px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      .title {
        font-size: 120px;
        font-weight: bold;
        color: #e7fcff;
        line-height: 100px;
        text-shadow: 2px 2px 0px #3dc6d8;
        position: relative;
        margin-bottom: 40px;
      }
      .text-box {
        width: 614px;
        height: 37px;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(~assets/img/metabrain/header/rectangle.png);
        text-align: center;
        position: relative;
        .text {
          width: 540px;
          font-size: 40px;
          font-weight: 500;
          color: #ffffff;
          line-height: 30px;
          text-shadow: 2px 2px 0px #3dc6d8;
          letter-spacing: 1px;
          position: absolute;
          bottom: 17px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
  .metabrain-introduce {
    margin-bottom: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    .introduce {
      width: 489px;
      height: 348px;
    }
    span {
      width: 702px;
      font-size: 30px;
      font-weight: 400;
      color: #333333;
      line-height: 45px;
      letter-spacing: 1px;
      margin-left: 20px;
    }
  }
  .metabrain-solution {
    background: rgba(220, 220, 220, 0.25);
    overflow: hidden;
    padding-bottom: 38px;
    .solution-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-top: 49px;
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
  .metabrain-scene {
    overflow: hidden;
    .scene-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-top: 50px;
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
      margin-bottom: 50px;
      display: flex;
      justify-content: space-between;
      .box {
        width: 380px;
        height: 500px;
        background: #ffffff;
        box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
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
}
</style>