<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:26
 * @LastEditTime: 2022-01-17 20:16:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\Footer.vue
-->
<template>
  <div class="meeting">
    <div class="meeting-header">
      <vue-particles
        color="#66E3F5"
        :particlesNumber="150"
        shapeType="circle"
        :particleSize="3"
        :lineLinked="true"
        linesColor="#0EA56B"
        :linesWidth="2"
        :moveSpeed="2"
        :hoverEffect="true"
        :clickEffect="false"
        class="lizi"
      >
      </vue-particles>
      <div class="title" data-aos="zoom-in" data-aos-duration="1000">
        <span class="up">智能会议综合解决方案</span>
        <span class="bottom">高达13米远距会议高清通信</span>
      </div>
    </div>
    <div class="meeting-features">
      <div class="features-header">
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">方案特色</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">PROGRAM FEATURES</span>
      </div>
      <div class="features-container">
        <div
          @mouseenter="item.isHover = true"
          @mouseleave="item.isHover = false"
          class="box pubic-box-scale"
          :key="index"
          v-for="(item, index) in featuresList"
        >
          <!-- <div v-show="!item.isHover" class="circle">
            <img :src="item.isHover ? item.hoverImg : item.img" alt="" />
          </div> -->
          <img :src="item.isHover ? item.hoverImg : item.img" alt="" />
          <!-- <img
            class="hoverimg"
            v-show="item.isHover"
            :src="item.hoverImg"
            alt=""
          /> -->
          <span class="title">{{ item.title }}</span>
          <span class="text">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="meeting-algorithm">
      <div
        class="algorithm-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">核心算法</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">CORE ALGORITHM</span>
      </div>
      <div
        class="algorithm-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in algorithmList">
          <img :src="item.img" alt="" />
          <span class="title">{{ item.title }}</span>
          <span class="text">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="meeting-application">
      <div
        class="application-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">产品应用</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">PRODUCT APPLICATION</span>
      </div>
      <div
        class="application-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <FiveCarousel :Swiper="swiperList"></FiveCarousel>
      </div>
    </div>
    <div class="meeting-program">
      <div
        class="program-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">解决方案</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">SOLUTION</span>
      </div>
      <carousel
        :contentList="programList"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      ></carousel>
    </div>
    <div class="meeting-scene">
      <div
        class="scene-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">应用场景</span>
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
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
    <div class="meeting-customer">
      <div
        class="customer-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">标杆客户</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">BENCHMARKING CUSTOMER</span>
      </div>
      <div
        class="customer-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img
          :class="item.imgClass"
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
import FiveCarousel from "./public/FiveCarousel.vue";
export default {
  data() {
    return {
      cardIndex: 0,
      nowIndex: 0,
      featuresList: [
        {
          img: require("assets/img/meeting/features/img11.png"),
          isHover: false,
          hoverImg: require("assets/img/meeting/features/img1.gif"),
          title: "影随人动",
          text: "通过人脸识别技术实时跟踪说话人的位置",
        },
        {
          img: require("assets/img/meeting/features/img22.png"),
          isHover: false,
          hoverImg: require("assets/img/meeting/features/img2.gif"),
          title: "影随声动",
          text: "实时跟踪判断说话人的个数和方向",
        },
        {
          img: require("assets/img/meeting/features/img33.png"),
          isHover: false,
          hoverImg: require("assets/img/meeting/features/img3.gif"),
          title: "声随人动",
          text: "声音嘈杂的环境下，只捕捉说话人的声音",
        },
        {
          img: require("assets/img/meeting/features/img44.png"),
          isHover: false,
          hoverImg: require("assets/img/meeting/features/img4.gif"),
          title: "语音转写",
          text: "对会议中的谈话内容实时转化成文字",
        },
        {
          img: require("assets/img/meeting/features/img55.png"),
          isHover: false,
          hoverImg: require("assets/img/meeting/features/img5.gif"),
          title: "唇动识别",
          text: "在会议记录中实时输出说话人对应的人脸",
        },
        {
          img: require("assets/img/meeting/features/img66.png"),
          isHover: false,
          hoverImg: require("assets/img/meeting/features/img6.gif"),
          title: "声纹识别",
          text: "采集会议中说话人的声纹信息，协助智能音幕更好的分离人声",
        },
      ],
      algorithmList: [
        {
          img: require("assets/img/meeting/algorithm/img1.png"),
          title: "远程拾音",
          text: "高达13m超远距拾音",
        },
        {
          img: require("assets/img/meeting/algorithm/img2.png"),
          title: "回声消除",
          text: "8m稳定双讲",
        },
        {
          img: require("assets/img/meeting/algorithm/img3.png"),
          title: "混响抑制",
          text: "提升语音的可懂度",
        },
        {
          img: require("assets/img/meeting/algorithm/img4.png"),
          title: "智能音幕",
          text: "对声源做增强，抑制住声源以外的声音",
        },
        {
          img: require("assets/img/meeting/algorithm/img5.png"),
          title: "声源定位",
          text: "精准定位到说话人的位置",
        },
        {
          img: require("assets/img/meeting/algorithm/img6.png"),
          title: "AI降噪",
          text: "抑制噪声，保证高清的语音通话",
        },
      ],
      applicationList: [
        {
          box: "box1",
          img: "img1",
          text: "领夹麦",
        },
        {
          box: "box2",
          img: "img2",
          text: "会议摄像头",
        },
        {
          box: "box3",
          img: "img3",
          text: "会议平板",
        },
        {
          box: "box4",
          img: "img4",
          text: "桌面麦克风",
        },
        {
          box: "box5",
          img: "img5",
          text: "商显",
        },
      ],
      swiperShow: false,
      swiperOptions: {
        // slidesPerView: 'auto',
        // 初始化索引
        initialSlide: 1,
        watchSlidesProgress: true,
        slidesPerView: "auto",
        slideToClickedSlide: true,
        centeredSlides: true,
        // 是否循环(会导致事件不会复制)
        loop: true,
        loopedSlides: 3,
        autoplay: true,
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
              if (Math.abs(slideProgress) > 2) {
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
          img: require("assets/img/meeting/application/img1.png"),
          text: "领夹麦",
        },
        {
          imgClass: "img2",
          img: require("assets/img/meeting/application/img2.png"),
          text: "会议摄像头",
        },
        {
          imgClass: "img3",
          img: require("assets/img/meeting/application/img3.png"),
          text: "会议平板",
        },
        {
          imgClass: "img4",
          img: require("assets/img/meeting/application/img4.png"),
          text: "桌面麦克风",
        },
        {
          imgClass: "img5",
          img: require("assets/img/meeting/application/img5.png"),
          text: "商显",
        },
      ],
      programList: [
        {
          img: require("assets/img/meeting/program/img1.png"),
          title: "音视频会议技术方案",
          text: "8麦阵列+4k摄像头，超远距拾音、超鲁棒的混响抑制技术、复杂声场的噪声抑制技术、行业领先的回声抑制技术、影随人动、影随声动、声随人动、声随影动、自适应角色分离会议记录，一站式会议音视频模组解决方案。",
        },
        {
          img: require("assets/img/meeting/program/img2.png"),
          title: "语音交互技术方案",
          text: "语音控制+语音交互整体技术解决方案。",
        },
        {
          img: require("assets/img/meeting/program/img3.png"),
          title: "超声技术方案",
          text: "超声触控、动作识别和场景感知，多维使用体验，更加智能。",
        },
        {
          img: require("assets/img/meeting/program/img4.png"),
          title: "超低功耗低延时解决方案",
          text: "16毫秒延时、0.5毫安功耗RTOS系统解决方案，助力穿戴和桌面拾音设备实现良好的语音通信。",
        },
      ],
      sceneList: [
        {
          img: require("assets/img/meeting/scene/img1.png"),
          title: "远程会议",
        },
        {
          img: require("assets/img/meeting/scene/img2.png"),
          title: "远程教育",
        },
        {
          img: require("assets/img/meeting/scene/img3.png"),
          title: "远程机构",
        },
      ],
      customerList: [
        {
          imgClass: "img1",
          img: require("assets/img/meeting/customer/img1.png"),
        },
        {
          imgClass: "img2",
          img: require("assets/img/meeting/customer/img2.png"),
        },
        {
          imgClass: "img3",
          img: require("assets/img/meeting/customer/img3.png"),
        },
        {
          imgClass: "img4",
          img: require("assets/img/meeting/customer/img4.png"),
        },
        {
          imgClass: "img5",
          img: require("assets/img/meeting/customer/img5.png"),
        },
        {
          imgClass: "img6",
          img: require("assets/img/meeting/customer/img6.png"),
        },
        {
          imgClass: "img7",
          img: require("assets/img/meeting/customer/img7.png"),
        },
        {
          imgClass: "img8",
          img: require("assets/img/meeting/customer/img8.png"),
        },
        {
          imgClass: "img9",
          img: require("assets/img/meeting/customer/img9.png"),
        },
        {
          imgClass: "img10",
          img: require("assets/img/meeting/customer/img10.png"),
        },
        {
          imgClass: "img11",
          img: require("assets/img/meeting/customer/img11.png"),
        },
      ],
    };
  },
  components: { Carousel, swiper, swiperSlide, FiveCarousel },
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
      this.swiperOptions.on.click = function (swiper, event) {
        // 直接操作dom
        // this指向swiper实例
        console.log(swiper.target.dataset.skip);
        that.skipGoodsList(swiper.target.dataset.skip, "main");
      };
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
.meeting {
  .meeting-header {
    height: 540px;
    background-color: #1b2382;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .lizi {
      width: 100%;
      height: 540px;
      position: absolute;
    }
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      .up {
        font-size: 72px;
        font-weight: 500;
        color: #00ffff;
        text-shadow: 0px 0px 22px #3747ff;
        margin-bottom: 20px;
      }
      .bottom {
        font-size: 36px;
        font-weight: 400;
        color: #00ffff;
        text-shadow: 0px 0px 12px #3747ff;
      }
    }
  }
  .meeting-features {
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
      width: 1040px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 50px;
      .box {
        width: 250px;
        height: 298px;
        background: rgba(220, 220, 220, 0.25);
        box-shadow: 0px 0px 12px 1px rgba(51, 51, 51, 0.3);
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(4),
        &:nth-child(5) {
          margin-right: 145px;
        }
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin-bottom: 43px;
        }
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6) {
          .text {
            margin-left: 10px;
          }
        }
        // .hoverimg {
        //   width: 100px;
        //   margin-bottom: 20px;
        // }
        // .circle {
        //   width: 100px;
        //   height: 100px;
        //   background: #0077f7;
        //   border-radius: 50px;
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        //   margin-bottom: 20px;
        //   img {
        //     width: 50px;
        //     height: 50px;
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
          text-align: center;
          margin-bottom: 23px;
        }
        .text {
          width: 198px;
          font-size: 18px;
          font-weight: 400;
          color: #333333;
          text-align: left;
        }
      }
    }
  }
  .meeting-algorithm {
    overflow: hidden;
    background: rgba(220, 220, 220, 0.25);
    margin-bottom: 50px;
    .algorithm-header {
      width: 700px;
      height: 90px;
      margin: 50px auto;
      margin-bottom: 31px;
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
    .algorithm-container {
      width: 1000px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 43px;
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:nth-child(1),
        &:nth-child(4) {
          width: 188px;
          margin-right: 197px;
        }
        &:nth-child(2),
        &:nth-child(5) {
          width: 207px;
          margin-right: 200px;
        }
        &:nth-child(3),
        &:nth-child(6) {
          width: 169px;
        }
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin-bottom: 44px;
        }
        &:nth-child(5) {
          .text {
            margin-bottom: 15px;
          }
        }
        &:nth-child(4),
        &:nth-child(6) {
          .text {
            width: 198px;
          }
        }
        &:nth-child(6) {
          margin-top: -5px;
          img {
            margin-bottom: 7px;
          }
          .title {
            margin-bottom: 7px;
          }
          .text {
            width: 198px;
          }
        }
        img {
          width: 131px;
          margin-bottom: 12px;
        }
        .title {
          font-size: 24px;
          font-weight: 400;
          color: #3d485d;
          margin-bottom: 12px;
        }
        .text {
          font-size: 18px;
          font-weight: 400;
          color: #98a3b7;
          text-align: left;
        }
      }
    }
  }
  .meeting-application {
    overflow: hidden;
    .application-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
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
      width: 1300px;
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

              // span {
              //   font-size: 24px;
              //   font-weight: 400;
              //   color: #333333;
              //   position: absolute;
              //   left: 50%;
              //   transform: translate(-45%);
              //   bottom: -47px;
              // }
            }
          }
        }
      }
    }
  }
  .meeting-program {
    overflow: hidden;
    background: rgba(220, 220, 220, 0.25);
    padding-bottom: 38px;
    margin-bottom: 50px;
    .program-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-top: 50px;
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
  .meeting-scene {
    overflow: hidden;
    .scene-header {
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
    .scene-container {
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:hover {
          .img {
            img {
              transform: scale(1.2);
            }
          }
        }
        .img {
          width: 332px;
          height: 258px;
          overflow: hidden;
          border-radius: 4%;
          margin-bottom: 25px;
          img {
            width: 100%;
            transition: all 0.6s;
          }
        }
        span {
          font-size: 36px;
          font-weight: 400;
          color: #1b2382;
        }
      }
    }
  }
  .meeting-customer {
    overflow: hidden;
    .customer-header {
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
    .customer-container {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 41px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .img1,
      .img2,
      .img3,
      .img4,
      .img5 {
        width: 200px;
        height: 105px;
        margin-bottom: 30px;
      }
      .img6,
      .img7,
      .img8,
      .img9,
      .img10,
      .img11 {
        width: 180px;
        height: 100px;
      }
    }
  }
}
</style>