<!--
 * @Author: your name
 * @Date: 2021-11-04 15:16:48
 * @LastEditTime: 2022-03-12 16:45:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\Layout.vue
-->
<template>
  <div class="home-page">
    <div class="home-page-header">
      <iframe
        class="wave"
        src="/static/jquery3d/index.html"
        frameborder="0"
      ></iframe>
      <!-- <div class="title" data-aos="zoom-in" data-aos-duration="1000">
        <img class="up" src="~assets/img/homepage/header/up.png" alt="" />
      </div> -->
      <span data-aos="zoom-in" data-aos-duration="1000"
        >奇梦者 - 多模态人机交互技术服务提供商</span
      >
    </div>
    <div class="home-page-AI">
      <div class="AI-header">
        <img src="~assets/img/security/header/left.png" />
        <span class="title">全栈智能AI技术闭环</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english"
          >FULL STACK INTELLIGENT AI TECHNOLOGY CLOSED LOOP</span
        >
      </div>
      <div
        class="AI-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <!-- <img class="circle" src="~assets/img/homepage/AI/circle.png" alt /> -->
        <img
          class="background"
          src="~assets/img/homepage/AI/background.png"
          alt
        />
        <div
          @mouseenter="item.isHover = true"
          @mouseleave="item.isHover = false"
          :class="item.box"
          :key="index"
          class="pubic-img-scale"
          v-for="(item, index) in AIList"
        >
          <img
            :class="item.imgClass"
            :src="item.isHover ? item.hoverImg : item.img"
            alt
          />
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="home-page-solution">
      <div
        class="solution-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt class="img-left" />
        <span class="title">多个领域解决方案</span>
        <img
          src="~assets/img/security/header/right.png"
          alt
          class="img-right"
        />
        <span class="english">MULTI DOMAIN SOLUTIONS</span>
      </div>
      <div
        class="solution-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div
          :class="item.class"
          :key="index"
          @click="routerToPath(item)"
          v-for="(item, index) in solutionList"
        >
          <div class="bigbox">
            <div class="content">
              <div class="circle">
                <img :class="item.imgClass" :src="item.img" alt />
              </div>
              <span class="title">{{ item.span }}</span>
            </div>
            <div class="content2">
              <div class="content2-header">
                <div class="circle">
                  <img :class="item.imgClass" :src="item.img" alt />
                </div>
                <span class="title">{{ item.span }}</span>
              </div>
              <div class="border"></div>
              <span class="text">{{ item.text }}</span>
              <div class="more">
                <img src="~assets/img/homepage/solution/arrow.png" alt />
                <span>了解更多</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-page-advantage">
      <div
        class="advantage-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt class="img-left" />
        <span class="title">企业优势</span>
        <img
          src="~assets/img/security/header/right.png"
          alt
          class="img-right"
        />
        <span class="english">ENTERPRISE ADVANTAGE</span>
      </div>
      <div
        class="advantage-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in advantageList">
          <img :src="item.img" alt />
          <span class="title">{{ item.title }}</span>
          <span :class="item.textClass">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="home-page-customer">
      <div
        class="customer-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt />
        <span class="title">标杆客户</span>
        <img src="~assets/img/security/header/right.png" alt />
        <span class="english">BENCHMARKING CUSTOMER</span>
      </div>
      <div
        class="customer-father"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="customer-up">
          <img
            :src="item.img"
            alt
            :key="index"
            v-for="(item, index) in upList"
          />
        </div>
        <div class="customer-bottom">
          <img
            :src="item.img"
            alt
            :key="index"
            v-for="(item, index) in bottomList"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      timer: null, //定时器
      mark: 0, //比对图片索引的变量

      imgList: [
        {
          class: "box1",
        },
        {
          class: "box2",
        },
      ],
      //基本数据
      AIList: [
        {
          box: "box1",
          imgClass: "img1",
          img: require("assets/img/homepage/AI/img1.png"),
          isHover: false,
          hoverImg: require("assets/img/homepage/AI/img1.gif"),
          text: "深度信号处理",
        },
        {
          box: "box2",
          imgClass: "img2",
          img: require("assets/img/homepage/AI/img2.png"),
          isHover: false,
          hoverImg: require("assets/img/homepage/AI/img2.gif"),
          text: "语音唤醒",
        },
        {
          box: "box3",
          imgClass: "img3",
          img: require("assets/img/homepage/AI/img3.png"),
          isHover: false,
          hoverImg: require("assets/img/homepage/AI/img3.gif"),
          text: "声纹识别",
        },
        {
          box: "box4",
          imgClass: "img4",
          img: require("assets/img/homepage/AI/img4.png"),
          isHover: false,
          hoverImg: require("assets/img/homepage/AI/img4.gif"),
          text: "语音识别",
        },
        {
          box: "box5",
          imgClass: "img5",
          img: require("assets/img/homepage/AI/img5.png"),
          isHover: false,
          hoverImg: require("assets/img/homepage/AI/img5.gif"),
          text: "语音评测",
        },
        {
          box: "box6",
          imgClass: "img6",
          img: require("assets/img/homepage/AI/img6.png"),
          isHover: false,
          hoverImg: require("assets/img/homepage/AI/img6.gif"),
          text: "语音合成",
        },
        {
          box: "box7",
          imgClass: "img7",
          img: require("assets/img/homepage/AI/img7.png"),
          isHover: false,
          hoverImg: require("assets/img/homepage/AI/img7.gif"),
          text: "自然语言理解",
        },
        {
          box: "box8",
          imgClass: "img8",
          img: require("assets/img/homepage/AI/img8.png"),
          isHover: false,
          hoverImg: require("assets/img/homepage/AI/img8.gif"),
          text: "动作识别",
        },
        {
          box: "box9",
          imgClass: "img9",
          img: require("assets/img/homepage/AI/img9.png"),
          isHover: false,
          hoverImg: require("assets/img/homepage/AI/img9.gif"),
          text: "物体识别",
        },
        {
          box: "box10",
          imgClass: "img10",
          img: require("assets/img/homepage/AI/img10.png"),
          isHover: false,
          hoverImg: require("assets/img/homepage/AI/img10.gif"),
          text: "人脸识别",
        },
      ],
      nowIndex: 0,
      solutionList: [
        {
          name: "meeting",
          class: "box1",
          imgClass: "img1",
          img: require("assets/img/homepage/solution/icon1.png"),
          span: "智能会议",
          pageId: 1,
          navIndex: 2,
          text: "高达13米远距会议高清通信8麦克风阵列音视频模组",
        },
        {
          name: "banking",
          class: "box2",
          imgClass: "img2",
          img: require("assets/img/homepage/solution/icon2.png"),
          span: "智慧金融",
          pageId: 6,
          navIndex: 3,
          text: "全链路云+端语音交互技术整体解决方案",
        },
        {
          name: "wear",
          class: "box3",
          imgClass: "img3",
          img: require("assets/img/homepage/solution/icon3.png"),
          span: "智能穿戴",
          text: "行业最优低功耗离线语音技术",
          pageId: 2,
          navIndex: 2,
        },
        {
          name: "english",
          class: "box4",
          imgClass: "img4",
          img: require("assets/img/homepage/solution/icon4.png"),
          span: "智慧教育",
          text: "趣味性学习英语，提升口语能力，实时监测学生课中学习状态",
          pageId: 9,
          navIndex: 3,
        },
        {
          name: "security",
          class: "box5",
          imgClass: "img5",
          img: require("assets/img/homepage/solution/icon5.png"),
          span: "智慧安防",
          text: "超远距音视频安防解决方案",
          pageId: 5,
          navIndex: 3,
        },
        {
          name: "metabrain",
          class: "box6",
          imgClass: "img6",
          img: require("assets/img/homepage/solution/icon6.png"),
          span: "MetaBrain",
          text: "多模态机器感知引擎",
          pageId: 4,
          navIndex: 2,
        },
        {
          name: "terminal",
          class: "box7",
          imgClass: "img7",
          img: require("assets/img/homepage/solution/icon7.png"),
          span: "智能终端",
          text: "多模态人机交互技术解决方案",
          pageId: 3,
          navIndex: 2,
        },
        {
          name: "warindustry",
          class: "box8",
          imgClass: "img8",
          img: require("assets/img/homepage/solution/icon8.png"),
          span: "智慧军工",
          text: "各类机载系统的语音识别解决方案",
          pageId: 7,
          navIndex: 3,
        },
      ],
      advantageList: [
        {
          img: require("assets/img/homepage/advantage/icon1.png"),
          title: "顶尖的语音技术团队",
          textClass: "text1",
          text: "业内top的全栈式技术团队，拥有多项国家级语音技术专利",
        },
        {
          img: require("assets/img/homepage/advantage/icon2.png"),
          title: "低功耗语音技术公司",
          textClass: "text2",
          text: "低功耗语音芯片技术实力与研发进度世界最为前沿",
        },
        {
          img: require("assets/img/homepage/advantage/icon3.png"),
          title: "声场技术支撑的复杂环境落地",
          textClass: "text3",
          text: "自适应的语音降噪与识别技术算法的突破，使得产品能够适配各类复杂环境的语音交互，可延展性极强",
        },
        {
          img: require("assets/img/homepage/advantage/icon4.png"),
          title: "多模态技术产业融合",
          textClass: "text4",
          text: "音视频多模态解决方案为国内会议、安防大厂提供全面服务 ，基本覆盖国内头部大厂，超声技术已于国内几家头部电子企业形成联动",
        },
      ],
      upList: [
        {
          img: require("assets/img/homepage/customer/img1.png"),
        },
        {
          img: require("assets/img/homepage/customer/img2.png"),
        },
        {
          img: require("assets/img/homepage/customer/img3.png"),
        },
        {
          img: require("assets/img/homepage/customer/img4.png"),
        },
        {
          img: require("assets/img/homepage/customer/img5.png"),
        },
        {
          img: require("assets/img/homepage/customer/img6.png"),
        },
        {
          img: require("assets/img/homepage/customer/img7.png"),
        },
        {
          img: require("assets/img/homepage/customer/img8.png"),
        },
        {
          img: require("assets/img/homepage/customer/img9.png"),
        },
        {
          img: require("assets/img/homepage/customer/img10.png"),
        },
        {
          img: require("assets/img/homepage/customer/img11.png"),
        },
        {
          img: require("assets/img/homepage/customer/img12.png"),
        },
        {
          img: require("assets/img/homepage/customer/img13.png"),
        },
        {
          img: require("assets/img/homepage/customer/img14.png"),
        },
        {
          img: require("assets/img/homepage/customer/img15.png"),
        },
        {
          img: require("assets/img/homepage/customer/img16.png"),
        },
        {
          img: require("assets/img/homepage/customer/img17.png"),
        },
        {
          img: require("assets/img/homepage/customer/img18.png"),
        },
      ],
      bottomList: [
        {
          img: require("assets/img/homepage/customer/img19.png"),
        },
        {
          img: require("assets/img/homepage/customer/img20.png"),
        },
        {
          img: require("assets/img/homepage/customer/img21.png"),
        },
        {
          img: require("assets/img/homepage/customer/img22.png"),
        },
        {
          img: require("assets/img/homepage/customer/img23.png"),
        },
        {
          img: require("assets/img/homepage/customer/img24.png"),
        },
        {
          img: require("assets/img/homepage/customer/img25.png"),
        },
        {
          img: require("assets/img/homepage/customer/img26.png"),
        },
        {
          img: require("assets/img/homepage/customer/img27.png"),
        },
        {
          img: require("assets/img/homepage/customer/img28.png"),
        },
      ],
    };
  },
  // ifeData: require("./jquery3d/index.html"),
  components: {},
  computed: {},
  methods: {
    ...mapMutations(["changePlace"]),
    autoPlay() {
      this.mark++;
      if (this.mark === 2) {
        this.mark = 0;
      }
    },
    play() {
      this.timer = setInterval(this.autoPlay, 5000);
    },
    change(i) {
      this.mark = i;
    },
    stop() {
      clearInterval(this.timer);
    },
    move() {
      this.timer = setInterval(this.autoPlay, 5000);
    },
    getIndex(index) {
      this.nowIndex = index;
    },
    changeIndex(index) {
      this.$refs.carousel3d.currentIndex = index;
      this.nowIndex = this.$refs.carousel3d.currentIndex;
    },
    routerToPath(item) {
      //路由传参，法会向history栈添加一个新纪录，所以，当用户点击浏览器后退按钮时，会回到之前的URL
      this.$router.push({ name: item.name });
      this.changePlace({ navIndex: item.navIndex, pageIndex: item.pageId });
    },
  },
  created() {
    this.play();
  },
  mounted() {
    AOS.init();
    // 你也可以在这里设置全局配置
    AOS.init({
      duration: 1500,
      once:true,
    });
  },
  updated() {},
  destroyed() {},
};
</script>
<style lang="scss" scoped>
.home-page {
  .home-page-header {
    height: 700px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(~assets/img/homepage/header/background.png);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .wave {
      width: 100%;
      height: 700px;
      position: absolute;
    }
    span {
      font-size: 72px;
      color: #fff;
      margin-bottom: 138px;
      font-family: "宋体";
    }
    // .title {
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: center;
    //   align-items: center;
    //   margin-bottom: 50px;
    //   .up {
    //     width: 1281px;
    //     margin-bottom: 84px;
    //   }
    //   .bottom {
    //     width: 761px;
    //   }
    // }
  }
  .home-page-AI {
    overflow: hidden;
    margin-bottom: 50px;
    background: rgba(220, 220, 220, 0.25);
    .AI-header {
      width: 900px;
      height: 90px;
      margin: 50px auto;
      margin-bottom: 34px;
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
        // &:nth-child(3) {
        //   width: 206px;
        //   height: 29px;
        // }
      }
      .english {
        font-size: 24px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
      }
    }
    .AI-container {
      width: 711px;
      height: 739px;
      margin: 0 auto;
      margin-bottom: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .circle {
        width: 599px;
        height: 599px;
        position: absolute;
        animation: rotate 2s linear infinite;
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
      .background {
        width: 500px;
        height: 472px;
        margin-bottom: 40px;
      }
      .box1,
      .box2,
      .box3,
      .box4,
      .box5,
      .box6,
      .box7,
      .box8,
      .box9,
      .box10 {
        width: 140px;
        height: 140px;
        background: #ffffff;
        box-shadow: 0px 0px 10px 0px rgba(59, 59, 59, 0.1);
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        span {
          font-size: 18px;
          font-weight: 400;
          color: #333333;
          position: absolute;
        }
        .img1 {
          width: 55px;
          margin-top: -28px;
        }
        .img2 {
          width: 42px;
          margin-top: -21px;
        }
        .img3 {
          width: 43px;
          margin-top: -23px;
        }
        .img4 {
          width: 25px;
          margin-top: -21px;
        }
        .img5 {
          width: 40px;
          margin-top: -30px;
        }
        .img6 {
          width: 50px;
          margin-top: -27px;
        }
        .img7 {
          width: 43px;
          margin-top: -28px;
        }
        .img8 {
          width: 31px;
          margin-top: -27px;
        }
        .img9 {
          width: 42px;
          margin-top: -28px;
        }
        .img10 {
          width: 42px;
          margin-top: -28px;
        }
      }
      .box1 {
        top: 9px;
        left: 50%;
        transform: translate(-50%);
        span {
          bottom: 32px;
        }
      }
      .box2 {
        top: 64px;
        right: 116px;
        padding-bottom: 2px;
        span {
          bottom: 32px;
        }
      }
      .box3 {
        top: 209px;
        right: 10px;
        padding-bottom: 7px;
        span {
          bottom: 32px;
        }
      }
      .box4 {
        bottom: 210px;
        right: 10px;
        padding-bottom: 7px;
        span {
          bottom: 32px;
        }
      }
      .box5 {
        bottom: 65px;
        right: 116px;
        span {
          bottom: 32px;
        }
      }
      .box6 {
        bottom: 10px;
        left: 50%;
        transform: translate(-50%);
        span {
          bottom: 32px;
        }
      }
      .box7 {
        bottom: 65px;
        left: 115px;
        span {
          bottom: 32px;
        }
      }
      .box8 {
        bottom: 210px;
        left: 10px;
        span {
          bottom: 32px;
        }
      }
      .box9 {
        top: 209px;
        left: 10px;
        span {
          bottom: 32px;
        }
      }
      .box10 {
        top: 64px;
        left: 115px;
        span {
          bottom: 32px;
        }
      }
    }
  }
  .home-page-solution {
    overflow: hidden;
    .solution-header {
      width: 850px;
      height: 90px;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 43px;
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
        // &:nth-child(3) {
        //   width: 206px;
        //   height: 29px;
        // }
      }
      .english {
        font-size: 24px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
      }
    }
    .solution-container {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .box1,
      .box2,
      .box3,
      .box4,
      .box5,
      .box6,
      .box7,
      .box8 {
        width: 260px;
        height: 181px;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
        cursor: pointer;
        &:hover {
          .content {
            opacity: 0;
          }
          .bigbox {
            transition: all 0.5s linear;
            margin-top: -181px;
          }
        }
        .bigbox {
          height: 362px;
          .content {
            height: 181px;
            display: flex;
            justify-content: center;
            align-items: center;
            .circle {
              width: 50px;
              height: 50px;
              background: #0077f7;
              border-radius: 25px;
              margin-right: 15px;
              display: flex;
              justify-content: center;
              align-items: center;
              .img1 {
                width: 23px;
                height: 24px;
              }
              .img2 {
                width: 32px;
                height: 24px;
              }
              .img3 {
                width: 17px;
                height: 26px;
              }
              .img4 {
                width: 29px;
                height: 25px;
              }
              .img5 {
                width: 23px;
                height: 26px;
              }
              .img6 {
                width: 22px;
                height: 25px;
              }
              .img7 {
                width: 26px;
                height: 22px;
              }
              .img8 {
                width: 26px;
                height: 26px;
              }
            }
            .title {
              font-size: 24px;
              font-weight: bold;
              color: #ffffff;
              line-height: 24px;
              letter-spacing: 2px;
            }
          }
          .content2 {
            height: 181px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            .content2-header {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 9px;
              .circle {
                width: 50px;
                height: 50px;
                background: #0077f7;
                border-radius: 25px;
                margin-right: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                .img1 {
                  width: 23px;
                  height: 24px;
                }
                .img2 {
                  width: 32px;
                  height: 24px;
                }
                .img3 {
                  width: 17px;
                  height: 26px;
                }
                .img4 {
                  width: 29px;
                  height: 25px;
                }
                .img5 {
                  width: 23px;
                  height: 26px;
                }
                .img6 {
                  width: 22px;
                  height: 25px;
                }
                .img7 {
                  width: 26px;
                  height: 22px;
                }
                .img8 {
                  width: 26px;
                  height: 26px;
                }
              }
              .title {
                font-size: 24px;
                font-weight: bold;
                color: #ffffff;
                line-height: 24px;
                letter-spacing: 2px;
              }
            }
            .border {
              width: 162px;
              height: 2px;
              background-color: #fff;
              margin-bottom: 13px;
            }
            .text {
              width: 221px;
              font-size: 16px;
              font-weight: 400;
              color: #ffffff;
              line-height: 18px;
              margin-bottom: 40px;
            }
            .more {
              position: absolute;
              bottom: 9px;
              right: 20px;
              img {
                width: 22px;
                height: 12px;
                margin-right: 2px;
              }
              span {
                font-size: 16px;
                font-weight: 400;
                color: #ffffff;
                line-height: 10px;
              }
            }
          }
        }
      }
      .box1,
      .box2,
      .box3,
      .box4 {
        margin-bottom: 30px;
      }
      .box1 {
        background-image: url(~assets/img/homepage/solution/img1.png);
        .bigbox {
          .content2 {
            .text {
              width: 219px;
            }
          }
        }
      }
      .box2 {
        background-image: url(~assets/img/homepage/solution/img2.png);
        .bigbox {
          .content2 {
            .text {
              width: 218px;
            }
          }
        }
      }
      .box3 {
        background-image: url(~assets/img/homepage/solution/img3.png);
        .bigbox {
          .content2 {
            .text {
              text-align: center;
              margin-bottom: 58px;
            }
          }
        }
      }
      .box4 {
        background-image: url(~assets/img/homepage/solution/img4.png);
        .bigbox {
          .content2 {
            .text {
              width: 208px;
              margin-bottom: 21px;
            }
          }
        }
      }
      .box5 {
        background-image: url(~assets/img/homepage/solution/img5.png);
        .bigbox {
          .content2 {
            .text {
              text-align: center;
              margin-bottom: 58px;
            }
          }
        }
      }
      .box6 {
        background-image: url(~assets/img/homepage/solution/img6.png);
        .bigbox {
          .content {
            // .circle {
            //   margin-left: 22px;
            //   margin-right: 14px;
            // }
            .title {
              letter-spacing: 0;
            }
          }
          .content2 {
            .content2-header {
              // .circle {
              //   // margin-left: 22px;
              //   // margin-right: 14px;
              // }
              .title {
                letter-spacing: 0px;
              }
            }
            // .border {
            //   // width: 180px;
            //   // margin-left: 19px;
            // }
            .text {
              text-align: center;
              // margin-left: 19px;
              margin-bottom: 58px;
            }
          }
        }
      }
      .box7 {
        background-image: url(~assets/img/homepage/solution/img7.png);
        .bigbox {
          .content2 {
            .text {
              text-align: center;
              margin-bottom: 58px;
            }
          }
        }
      }
      .box8 {
        background-image: url(~assets/img/homepage/solution/img8.png);
        .bigbox {
          .content2 {
            .text {
              width: 208px;
            }
          }
        }
      }
    }
  }
  .home-page-advantage {
    overflow: hidden;
    background: rgba(220, 220, 220, 0.25);
    margin-bottom: 50px;
    .advantage-header {
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
        // &:nth-child(3) {
        //   width: 206px;
        //   height: 29px;
        // }
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
      margin-bottom: 45px;
      display: flex;
      justify-content: space-between;
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 135px;
          height: 135px;
          margin: 0 auto;
          margin-bottom: 30px;
        }
        .title {
          font-size: 22px;
          font-weight: bold;
          color: #333333;
          line-height: 24px;
          text-align: center;
          margin-bottom: 12px;
        }
        .text1,
        .text2,
        .text3,
        .text4 {
          font-size: 18px;
          font-weight: 400;
          color: #666666;
          line-height: 24px;
          text-align: left;
        }
        .text1 {
          width: 241px;
        }
        .text2 {
          width: 234px;
        }
        .text3 {
          width: 270px;
        }
        .text4 {
          width: 234px;
        }
      }
    }
  }
  .home-page-customer {
    overflow: hidden;
    .customer-header {
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
    .customer-up {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      img {
        width: 150px;
        height: 81px;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(7),
        &:nth-child(8),
        &:nth-child(9),
        &:nth-child(10),
        &:nth-child(11),
        &:nth-child(13),
        &:nth-child(14),
        &:nth-child(15),
        &:nth-child(16),
        &:nth-child(17) {
          margin-right: 60px;
        }
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8),
        &:nth-child(9),
        &:nth-child(10),
        &:nth-child(11),
        &:nth-child(12) {
          margin-bottom: 40px;
        }
      }
    }
    .customer-bottom {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 44px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      img {
        width: 220px;
        height: 81px;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5) {
          margin-bottom: 40px;
        }
      }
    }
  }
}
</style>