<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:26
 * @LastEditTime: 2022-01-17 20:16:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\Footer.vue
-->
<template>
  <div class="wear">
    <div class="wear-header">
      <img class="circle" src="~assets/img/wear/header/circle.png" alt="" />
      <div class="title" data-aos="zoom-in" data-aos-duration="1000">
        <img class="up" src="~assets/img/wear/header/up.png" alt="" />
        <img class="bottom" src="~assets/img/wear/header/bottom.png" alt="" />
      </div>
    </div>
    <div class="wear-features">
      <div class="features-header">
        <img src="~assets/img/security/header/left.png" />
        <span class="title">方案特色</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">PROGRAM FEATURES</span>
      </div>
      <div class="features-container">
        <div
          @mouseenter="item.isHover = true"
          @mouseleave="item.isHover = false"
          :style="{ transform: item.isHover ? 'scale(1.1)' : 'scale(1)' }"
          class="box"
          :key="index"
          v-for="(item, index) in featuresList"
        >
          <!-- <div class="circle">
            <img
              :class="item.imgClass"
              :src="item.isHover ? item.hoverImg : item.img"
              alt=""
            />
          </div> -->
          <!-- 三元表达式来完成图片的转换 -->
          <img
            :src="item.isHover ? item.hoverImg : item.img"
            alt=""
          />
          <span class="title">{{ item.title }}</span>
          <span class="text">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="wear-algorithm">
      <div
        class="algorithm-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" />
        <span class="title">核心算法</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">CORE ALGORITHM</span>
      </div>
      <div
        class="container-up"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in upList">
          <img :src="item.img" alt="" />
          <span>{{ item.text }}</span>
        </div>
      </div>
      <div
        class="container-bottom"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in bottomList">
          <img :src="item.img" alt="" />
          <span class="title">{{ item.title }}</span>
          <span class="text">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="wear-application">
      <div
        class="application-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" />
        <span class="title">产品应用</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">PRODUCT APPLICATION</span>
      </div>
      <div
        class="application-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div v-if="swiperShow" id="swiperBox">
        <!-- //轮播图通过ref获取 -->
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide :key="index" v-for="(item, index) in swiperList">
              <img :class="item.imgClass" :src="item.img" alt="" />
              <span>{{ item.text }}</span>
            </swiper-slide>
          </swiper>
          <div slot="pagination" class="swiper-pagination" />
        </div>
      </div>
    </div>
    <div class="wear-solution">
      <div
        class="solution-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" />
        <span class="title">解决方案</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">SOLUTION</span>
      </div>
      <!-- bootstrap中的幻灯片 -->
      <carousel
        :contentList="solutionList"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      ></carousel>
    </div>
    <div class="wear-customer">
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
import Carousel from "./public/Carousel.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      nowIndex: 0,
      featuresList: [
        {
          imgClass: "img1",
          img: require("assets/img/wear/features/img11.png"),
          isHover: false,
          hoverImg: require("assets/img/wear/features/img1.gif"),
          title: "低功耗",
          text: "极低功耗保证超长续航",
        },
        {
          imgClass: "img2",
          img: require("assets/img/wear/features/img22.png"),
          isHover: false,
          hoverImg: require("assets/img/wear/features/img2.gif"),
          title: "多语种支持",
          text: "支持中英法意西俄等20种语种",
        },
        {
          imgClass: "img3",
          img: require("assets/img/wear/features/img33.png"),
          isHover: false,
          hoverImg: require("assets/img/wear/features/img3.gif"),
          title: "场景感知",
          text: "声学场景自动环境感知",
        },
        {
          imgClass: "img4",
          img: require("assets/img/wear/features/img44.png"),
          isHover: false,
          hoverImg: require("assets/img/wear/features/img4.gif"),
          title: "辅助医疗",
          text: "情绪识别、语音健康分析、超声感知",
        },
        {
          imgClass: "img5",
          img: require("assets/img/wear/features/img55.png"),
          isHover: false,
          hoverImg: require("assets/img/wear/features/img5.gif"),
          title: "声控自适应",
          text: "支持可以从手机中动态导入联系人、音乐等用户信息，支持自定义控制",
        },
        {
          imgClass: "img6",
          img: require("assets/img/wear/features/img66.png"),
          isHover: false,
          hoverImg: require("assets/img/wear/features/img6.gif"),
          title: "说话人自适应",
          text: "支持基于用户声纹的语音识别自适应，极大提升了在各种噪声环境下的语音识别性能",
        },
        {
          imgClass: "img7",
          img: require("assets/img/wear/features/img77.png"),
          isHover: false,
          hoverImg: require("assets/img/wear/features/img7.gif"),
          title: "语音合成",
          text: "支持低功耗5MIPS左右的离线语音合成",
        },
        {
          imgClass: "img8",
          img: require("assets/img/wear/features/img88.png"),
          isHover: false,
          hoverImg: require("assets/img/wear/features/img8.gif"),
          title: "超声触控",
          text: "手势操控、超声触控",
        },
      ],
      upList: [
        {
          img: require("assets/img/wear/algorithm/img1.png"),
          text: "单/多通道降噪",
        },
        {
          img: require("assets/img/wear/algorithm/img2.png"),
          text: "回声消除",
        },
        {
          img: require("assets/img/wear/algorithm/img3.png"),
          text: "语音唤醒",
        },
        {
          img: require("assets/img/wear/algorithm/img4.png"),
          text: "语音识别",
        },
        {
          img: require("assets/img/wear/algorithm/img5.png"),
          text: "声纹识别",
        },
      ],
      bottomList: [
        {
          img: require("assets/img/wear/algorithm/icon1.png"),
          title: "复杂度",
          text: "35MIPS",
        },
        {
          img: require("assets/img/wear/algorithm/icon2.png"),
          title: "内存占用",
          text: "50~100KB",
        },
        {
          img: require("assets/img/wear/algorithm/icon3.png"),
          title: "准确度",
          text: "> 99%",
        },
        {
          img: require("assets/img/wear/algorithm/icon4.png"),
          title: "功耗",
          text: "0.7ma",
        },
      ],
      applicationList: [
        {
          box: "box1",
          img: "img1",
          text: "AR",
        },
        {
          box: "box2",
          img: "img2",
          text: "智能耳机",
        },
        {
          box: "box3",
          img: "img3",
          text: "智能手表",
        },
        {
          box: "box4",
          img: "img4",
          text: "智能手环",
        },
        {
          box: "box5",
          img: "img5",
          text: "VR",
        },
      ],
      swiperShow: false,
      swiperOptions: {
        // slidesPerView: 'auto',
        // 初始化索引
        initialSlide: 0,
        watchSlidesProgress: true,
        slidesPerView: "auto",
        slideToClickedSlide: true,
        centeredSlides: true,
        // 是否循环(会导致事件不会复制)
        loop: true,
        loopAdditionalSlides: 1,
        // autoplay: true,
        // autoplayDisableOnInteraction: false,
        autoplay: {
          delay: 2500,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        touchRatio: 0.3,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        uniqueNavElements: false,
        on: {
          progress: function (progress) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              var slideProgress = this.slides[i].progress;
              var modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              var translate = slideProgress * modify * 88 + "px";
              var scale = 1 - Math.abs(slideProgress) / 10.4;
              var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                "translateX(" + translate + ") scale(" + scale + ")"
              );
              slide.css("zIndex", zIndex);
              slide.css("opacity", 1);
              if (Math.abs(slideProgress) > 2.5) {
                slide.css("opacity", 0);
              }
            }
          },
          setTransition: function (transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              slide.transition(transition);
            }
          },
          // 事件不会被复制，所以直接对dom进行操作
          click: function (swiper, event) {},
        },
      },
      swiperList: [
        {
          imgClass: "img1",
          img: require("assets/img/wear/application/img1.png"),
          text: "AR",
        },
        {
          imgClass: "img2",
          img: require("assets/img/wear/application/img2.png"),
          text: "智能耳机",
        },
        {
          imgClass: "img3",
          img: require("assets/img/wear/application/img3.png"),
          text: "智能手表",
        },
        {
          imgClass: "img4",
          img: require("assets/img/wear/application/img4.png"),
          text: "智能手环",
        },
        {
          imgClass: "img5",
          img: require("assets/img/wear/application/img5.png"),
          text: "VR",
        },
      ],
      solutionList: [
        {
          img: require("assets/img/wear/solution/img1.png"),
          title: "语音交互技术解决方案",
          text: "支持手表等穿戴设备的功能语音直接调用，在用户在运动或者家务等双手不便的场景，让用户很方便的使用手表，语音交互让操作更便捷。",
        },
        {
          img: require("assets/img/wear/solution/img2.png"),
          title: "语音通话技术解决方案",
          text: "户外运动、商场、地铁等嘈杂场景下周边噪声让通话拾音产生很多干扰，奇梦者低功耗的降噪技术和回声消除技术，让穿戴设备提供消费者满意的免提通话效果。",
        },
        {
          img: require("assets/img/wear/solution/img3.png"),
          title: "超声感知技术解决方案",
          text: "借助麦克风、喇叭，结合人工智能超声技术，实现场景感知、手势操控、超声触控和辅助医疗。",
        },
      ],
      customerList: [
        {
          img: require("assets/img/wear/customer/img1.png"),
        },
        {
          img: require("assets/img/wear/customer/img2.png"),
        },
        {
          img: require("assets/img/wear/customer/img3.png"),
        },
        {
          img: require("assets/img/wear/customer/img4.png"),
        },
        {
          img: require("assets/img/wear/customer/img5.png"),
        },
      ],
    };
  },
  components: { Carousel, swiper, swiperSlide },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  methods: {
    getIndex(index) {
      this.nowIndex = index;
    },
    changeIndex(index) {
      this.$refs.carousel3d.currentIndex = index;
      this.nowIndex = this.$refs.carousel3d.currentIndex;
    },
  },
  created() {
    this.swiperShow = false;
    this.$nextTick(() => {
      // 获取到图片之后再调用swiper进行复制，否则复制的都是空的
      this.swiperShow = true;
      const that = this;
    });
  },
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
.wear {
  .wear-header {
    height: 540px;
    margin-bottom: 50px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(~assets/img/wear/header/background.png);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    .circle {
      width: 971px;
      opacity: 0.3;
      position: absolute;
      animation: rotate 8s linear infinite;
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
    .title {
      width: 827px;
      height: 172px;
      position: relative;
      .up {
        width: 799px;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
      }
      .bottom {
        width: 827px;
        position: absolute;
        bottom: 0;
      }
    }
  }
  .wear-features {
    margin-bottom: 50px;
    .features-header {
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
    .features-container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .box {
        width: 250px;
        height: 320px;
        background: #ffffff;
        border: 1px solid #b5b5b5;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          margin-bottom: 40px;
        }
        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(8) {
          .text {
            margin-bottom: 65px;
          }
        }
        &:nth-child(2),
        &:nth-child(4),
        &:nth-child(7) {
          .text {
            margin-bottom: 43px;
          }
        }
        &:nth-child(2) {
          .text {
            width: 201px;
          }
        }
        &:nth-child(4) {
          .text {
            width: 180px;
          }
        }
        &:nth-child(5),
        &:nth-child(6) {
          .text {
            width: 198px;
          }
        }
        &:nth-child(7) {
          .text {
            width: 199px;
          }
        }
        &:nth-child(5) {
          .text {
            margin-bottom: 23px;
          }
        }
        &:nth-child(6) {
          .text {
            margin-bottom: 2px;
          }
        }
        // .circle {
        //   width: 100px;
        //   height: 100px;
        //   background: #0077f7;
        //   border-radius: 50px;
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        //   margin-bottom: 20px;
        //   .img1 {
        //     width: 50px;
        //     height: 50px;
        //   }
        //   .img2 {
        //     width: 53px;
        //     height: 50px;
        //   }
        //   .img3 {
        //     width: 51px;
        //     height: 43px;
        //   }
        //   .img4 {
        //     width: 50px;
        //     height: 50px;
        //   }
        //   .img5 {
        //     width: 50px;
        //     height: 45px;
        //   }
        //   .img6 {
        //     width: 54px;
        //     height: 50px;
        //   }
        //   .img7 {
        //     width: 52px;
        //     height: 52px;
        //   }
        //   .img8 {
        //     width: 33px;
        //     height: 54px;
        //   }
        // }
        img {
          width: 100px;
          margin-bottom: 20px;
        }
        .title {
          font-size: 26px;
          font-weight: bold;
          color: #333333;
          margin-bottom: 23px;
        }
        .text {
          font-size: 18px;
          font-weight: 400;
          color: #333333;
          text-align: left;
        }
      }
    }
  }
  .wear-algorithm {
    overflow: hidden;
    background: rgba(220, 220, 220, 0.25);
    .algorithm-header {
      width: 700px;
      height: 90px;
      margin: 50px auto;
      margin-bottom: 90px;
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
    .container-up {
      width: 1200px;
      height: 107px;
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 3px 3px 32px 6px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 30px;
      .box {
        width: 151px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        &:first-child {
          align-items: center;
          margin-top: -70px;
        }
        &:nth-child(2) {
          align-items: center;
          margin-top: -66px;
        }
        &:nth-child(3) {
          align-items: center;
          margin-top: -70px;
          margin-right: 2px;
        }
        &:nth-child(4) {
          align-items: center;
          margin-top: -62px;
        }
        &:nth-child(5) {
          align-items: center;
          margin-top: -57px;
        }
        img {
          width: 131px;
          margin-bottom: 14px;
        }
        span {
          font-size: 24px;
          font-weight: 400;
          color: #3d485d;
        }
      }
    }
    .container-bottom {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 50px;
      display: flex;
      justify-content: space-between;
      .box {
        width: 260px;
        height: 350px;
        background: #ffffff;
        box-shadow: -1px 7px 13px 0px rgba(24, 24, 24, 0.11);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 65px;
          height: 65px;
          margin-bottom: 28px;
        }
        .title {
          font-size: 24px;
          font-weight: 400;
          color: #333333;
          margin-bottom: 72px;
        }
        .text {
          font-size: 40px;
          font-weight: 400;
          font-style: italic;
          color: #333333;
        }
      }
    }
  }
  .wear-application {
    overflow: hidden;
    .application-header {
      width: 700px;
      height: 90px;
      margin: 50px auto;
      margin-bottom: 0;
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
    .application-container {
      width: 1290px;
      height: 485px;
      overflow: hidden;
      margin: 0 auto;
      padding-top: 43px;
      margin-bottom: 40px;
      text-align: center;
      #swiperBox {
        position: relative;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 10px;
        .swiper-container {
          overflow: visible;
          margin-bottom: 75px;
          .swiper-wrapper {
            .swiper-slide {
              // 图片大小
              width: 352px;
              height: 352px;
              background-color: #fff;
              box-shadow: 0px 0px 39px 4px rgba(51, 51, 51, 0.14);
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              img {
                display: block;
              }
              .img1 {
                width: 255px;
                height: 82px;
              }
              .img2 {
                width: 182px;
                height: 178px;
              }
              .img3 {
                width: 308px;
                height: 196px;
              }
              .img4 {
                width: 268px;
                height: 181px;
              }
              .img5 {
                width: 232px;
                height: 175px;
              }
              span {
                font-size: 24px;
                font-weight: 400;
                color: #333333;
                position: absolute;
                left: 50%;
                transform: translate(-50%);
                bottom: -47px;
              }
            }
          }
        }
      }
      .swiper-pagination {
        width: 202px;
        height: 5px;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        display: flex;
        justify-content: space-between;
        >>> .swiper-pagination-bullet {
          width: 26px;
          height: 5px;
          border-radius: 0;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url(~assets/img/meeting/application/space.png);
          display: block;
        }
        >>> .swiper-pagination-bullet-active {
          width: 46px;
          background-image: url(~assets/img/meeting/application/click.png);
        }
      }
    }
  }
  .wear-solution {
    overflow: hidden;
    background: rgba(220, 220, 220, 0.25);
    padding-bottom: 38px;
    margin-bottom: 50px;
    .solution-header {
      width: 700px;
      height: 90px;
      margin: 50px auto;
      margin-bottom: 0;
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
  }
  .wear-customer {
    overflow: hidden;
    .customer-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 41px;
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
      margin-bottom: 48px;
      display: flex;
      justify-content: space-between;
      img {
        width: 200px;
        height: 100px;
      }
    }
  }
}
</style>