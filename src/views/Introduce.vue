<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:26
 * @LastEditTime: 2022-01-17 20:16:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\Footer.vue
-->
<template>
  <div class="introduce">
    <div class="introduce-header">
      <div class="img">
        <img
          src="~assets/img/introduce/header/text.png"
          alt=""
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
      </div>
    </div>
    <div class="introduce-know">
      <div class="know-header">
        <img src="~assets/img/security/header/left.png" />
        <span class="title">了解奇梦者</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">ABOUT Qdreamer</span>
      </div>
      <div class="know-container">
        <img src="~assets/img/introduce/know/img1.png" alt="" />
        <div class="text-box">
          <div class="text" :key="index" v-for="(item, index) in textList">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="introduce-development">
      <div
        class="development-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" />
        <span class="title">发展历程</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">DEVELOPMENT</span>
      </div>
      <div
        class="animation-father"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div
          :class="item.class"
          :key="index"
          v-for="(item, index) in animationList"
        >
          <div class="circle"></div>
          <div :class="item.line"></div>
        </div>
        <div class="text1">
          <div class="title">2014年成立</div>
          <div class="text">
            - 8月，成立于苏州<br />- 10月，合作的科大可佳导购<br />&nbsp;&nbsp;&nbsp;机器人在合肥国购广场上线
          </div>
        </div>
        <div class="text2">
          <div class="title">2015年远场语音技术</div>
          <div class="text">
            - 优化远场语音交互技术<br />- 新签智童时刻、铭赛机器人、<br />&nbsp;&nbsp;小盒机器人等6家客户
          </div>
        </div>
        <div class="text3">
          <div class="title">2016年麦克风阵列</div>
          <div class="text">- 6月，环形多麦语音阵列模组研发上市</div>
        </div>
        <div class="text4">
          <div class="title">2017年机器人人机交互技术落地</div>
          <div class="text">- 全年机器人解决方案服务客户38家</div>
        </div>
        <div class="text5">
          <div class="title">2018年低功耗语音技术突破</div>
          <div class="text">- 语音芯片流片成功</div>
        </div>
        <div class="text6">
          <div class="title">2019年智慧教育方案</div>
          <div class="text">
            - 2月，军工芯片交付
            <br />- 7月，双师课堂解决方案规模交付 <br />- 10月，智慧金融方案落地
          </div>
        </div>
        <div class="text7">
          <div class="title">2020年智慧穿戴方案</div>
          <div class="text">
            - 5月，与华米达成战略合作，<br />&nbsp;&nbsp;成功落地穿戴低功耗语音技术<br />-
            12月，与oppo手表达成合作
          </div>
        </div>
        <div class="text8">
          <div class="title">2021年智慧会议方案</div>
          <div class="text">
            - 3月，与鸿合达成会议技术合作<br />- 5月，与TCL达成会议技术合作<br />&nbsp;&nbsp;并完成与头部音视频会议数十家<br />&nbsp;&nbsp;厂家达成合作
          </div>
        </div>
        <div class="text9">
          <div class="title">2022年产品矩阵产业化</div>
          <div class="text">
            - 金融产品几千万中标
            <br />- 教育产品数千万中标 <br />- 面向产业上游布局核心技术
          </div>
        </div>
        <audio-wave :Num="48" :Acolor="'#0077F7'" :isMiddle="true"></audio-wave>
      </div>
    </div>
    <div class="introduce-honor">
      <div
        class="honor-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" />
        <span class="title">荣誉资质</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">QUALIFICATION HONOR</span>
      </div>
      <div
        class="honor-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="carousel">
          <div class="carousel">
            <div class="leftArrow">
              <img
                src="~assets/img/terminal/solution/left.png"
                @click="arrowClick('prev')"
              />
            </div>
            <el-carousel
              :interval="5000"
              :autoplay="false"
              arrow="never"
              indicator-position="outside"
              trigger="click"
              ref="cardShow"
            >
              <el-carousel-item
                v-for="(item, index) in contentList"
                :key="index"
              >
                <img :class="item.imgClass" :src="item.img" />
                <span>{{ item.text }}</span>
              </el-carousel-item>
            </el-carousel>
            <div class="rightArrow">
              <img
                src="~assets/img/terminal/solution/right.png"
                @click="arrowClick('next')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AudioWave from "views/public/AudioWave";
import AOS from "aos";
export default {
  data() {
    return {
      animationList: [
        {
          class: "box1",
          line: "line1",
        },
        {
          class: "box2",
          line: "line2",
        },
        {
          class: "box3",
          line: "line3",
        },
        {
          class: "box4",
          line: "line4",
        },
        {
          class: "box5",
          line: "line5",
        },
        {
          class: "box6",
          line: "line6",
        },
        {
          class: "box7",
          line: "line7",
        },
        {
          class: "box8",
          line: "line8",
        },
        {
          class: "box9",
          line: "line9",
        },
      ],
      textList: [
        {
          text: "奇梦者是一家人机交互技术服务提供商，专注于基础语音和声学技术的研究，致力于通过人工智能技术让机器听得见、听得清、听得远、听得懂，更好地感知世界。",
        },
        {
          text: "奇梦者是一家全链路声学感知和语音技术的高科技公司，一直从事麦克风阵列技术、语音信号处理、语音识别、口语评测、口语考试、语言理解、语音合成、超声触控、超声动作识别、超声雷达等技术突破和产业化。让机器能够通过麦克风感知世界，不仅听得见、听得懂还能看得明白。奇梦者是国内消费电子产业的重要核心技术供应商。",
        },
        {
          text: "奇梦者面向各类电子产品提供人机交互技术，让机器能听会说，交互更多维度，使用更加智能。基于自研的智能语音技术，主要面向教育、安防、军工等领域的应用，提供定制化智能产品解决方案，解决室内、室外和各种特殊场景的智能化问题。",
        },
        {
          text: "我们秉着“ 源头技术创新 科技服务产业 ”的理念在不断发展，在人工智能语音行业做出的成绩得到各行各业的广泛认可。以一颗真诚的心，与众多合作企业互利互赢。我们期望通过长期的技术突破和无畏的业务拓展，基于自有人工智能技术，构建超带宽麦克风阵列+摄像头的多模态交互硬件体系，在未来五到十年成为全球领先的人机交互技术服务商，成为全球产业的上游核心技术公司。",
        },
      ],
      contentList: [
        {
          imgClass: "img1",
          img: require("assets/img/introduce/honor/img1.png"),
          text: "高新技术产业",
        },
        {
          imgClass: "img2",
          img: require("assets/img/introduce/honor/img2.png"),
          text: "最佳产品设计伙伴",
        },
        {
          imgClass: "img3",
          img: require("assets/img/introduce/honor/img3.png"),
          text: "优秀供应商",
        },
        {
          imgClass: "img4",
          img: require("assets/img/introduce/honor/img4.png"),
          text: "苏州市工业设计产品优秀奖",
        },
        {
          imgClass: "img5",
          img: require("assets/img/introduce/honor/img5.png"),
          text: "金鸡湖人才计划科技领军人才",
        },
      ],
    };
  },
  components: {
    AudioWave,
  },
  computed: {},
  methods: {
    arrowClick(val) {
      if (val === "next") {
        this.$refs.cardShow.next();
      } else {
        this.$refs.cardShow.prev();
      }
    },
  },
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
.introduce {
  .introduce-header {
    height: 540px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(~assets/img/introduce/header/gif.gif);
    margin-bottom: 50px;
    position: relative;
    .img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 297px;
      }
    }
  }
  .introduce-know {
    margin-bottom: 41px;
    .know-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 33px;
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
    .know-container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 386px;
        height: 629px;
      }
      .text-box {
        display: flex;
        flex-direction: column;
        width: 786px;
        font-size: 22px;
        font-weight: 400;
        color: #333333;
        line-height: 36px;
        text-indent: 2em;
        letter-spacing: 2px;
      }
    }
  }
  .introduce-development {
    overflow: hidden;
    background: rgba(220, 220, 220, 0.25);
    margin-bottom: 50px;
    .development-header {
      width: 700px;
      height: 90px;
      margin: 50px auto;
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
    .animation-father {
      width: 1200px;
      height: 700px;
      margin: 0 auto;
      margin-bottom: 23px;
      position: relative;
      .box1,
      .box2,
      .box3,
      .box4,
      .box5,
      .box6,
      .box7,
      .box8,
      .box9 {
        display: flex;
        align-items: center;
        position: absolute;
        .circle {
          width: 17px;
          height: 17px;
          background-color: rgba(0, 119, 247, 0.25);
          border: 2px solid #0077f7;
          border-radius: 50%;
          box-shadow: 0 0 13px #0077f7;
        }
        .line1 {
          width: 1px;
          height: 200px;
          background-color: #0077f7;
        }
        .line2 {
          width: 1px;
          height: 140px;
          background-color: #0077f7;
        }
        .line3 {
          width: 1px;
          height: 130px;
          background-color: #0077f7;
        }
        .line4 {
          width: 1px;
          height: 100px;
          background-color: #0077f7;
        }
        .line5 {
          width: 1px;
          height: 205px;
          background-color: #0077f7;
        }
        .line6 {
          width: 1px;
          height: 130px;
          background-color: #0077f7;
        }
        .line7 {
          width: 1px;
          height: 100px;
          background-color: #0077f7;
        }
        .line8 {
          width: 1px;
          height: 140px;
          background-color: #0077f7;
        }
        .line9 {
          width: 1px;
          height: 200px;
          background-color: #0077f7;
        }
      }
      .box1,
      .box3,
      .box5,
      .box7,
      .box9 {
        flex-direction: column;
      }
      .box2,
      .box4,
      .box6,
      .box8 {
        flex-direction: column-reverse;
      }
      .box1 {
        top: 136px;
        right: 108px;
      }
      .box2 {
        bottom: 190px;
        right: 133px;
      }
      .box3 {
        top: 208px;
        right: 334px;
      }
      .box4 {
        bottom: 230px;
        right: 434px;
      }
      .box5 {
        top: 135px;
        right: 560px;
      }
      .box6 {
        bottom: 200px;
        left: 423px;
      }
      .box7 {
        top: 235px;
        left: 323px;
      }
      .box8 {
        bottom: 190px;
        left: 72px;
      }
      .box9 {
        top: 135px;
        left: 47px;
      }
      .title {
        font-size: 22px;
        font-weight: 500;
        color: #333333;
        margin-bottom: 10px;
      }
      .text {
        font-size: 18px;
        font-weight: 400;
        color: #666666;
        line-height: 30px;
      }
      .text1 {
        position: absolute;
        top: 0;
        right: 0;
      }
      .text2 {
        position: absolute;
        bottom: 50px;
        right: 0;
      }
      .text3 {
        position: absolute;
        top: 133px;
        right: 145px;
      }
      .text4 {
        position: absolute;
        bottom: 151px;
        right: 258px;
      }
      .text5 {
        position: absolute;
        top: 60px;
        right: 380px;
      }
      .text6 {
        position: absolute;
        bottom: 60px;
        left: 320px;
      }
      .text7 {
        position: absolute;
        top: 100px;
        left: 270px;
      }
      .text8 {
        position: absolute;
        bottom: 20px;
        left: 0;
      }
      .text9 {
        position: absolute;
        top: 0;
        left: 0;
      }
      .audio-dynamic {
        width: 1187px;
        height: 102px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 304px;
      }
    }
  }
  .introduce-honor {
    overflow: hidden;
    .honor-header {
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
    .honor-container {
      width: 736px;
      margin: 0 auto;
      margin-bottom: 38px;
      .carousel {
        position: relative;
        .leftArrow {
          position: absolute;
          left: -44px;
          top: 35%;
          cursor: pointer;
          img {
            width: 24px;
            height: 40px;
          }
        }
        .rightArrow {
          position: absolute;
          right: -44px;
          top: 35%;
          cursor: pointer;
          img {
            width: 24px;
            height: 40px;
          }
        }
        .carousel {
          width: 736px;
          margin: 0 auto;
          >>> .el-carousel__indicator--horizontal .el-carousel__button {
            width: 46px;
            height: 5px;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url(~assets/img/terminal/solution/space.png);
          }
          >>> .el-carousel__indicator--horizontal.is-active
            .el-carousel__button {
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url(~assets/img/terminal/solution/click.png);
          }
          >>> .el-carousel__container {
            height: 340px;
            .el-carousel__item {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .img1,
            .img2,
            .img3 {
              width: 350px;
              height: 260px;
            }
            .img4,
            .img5 {
              width: 200px;
              height: 260px;
            }
            .img1,
            .img2,
            .img3,
            .img4,
            .img5 {
              margin: 0 auto;
              margin-bottom: 30px;
            }
            span {
              font-size: 24px;
              font-weight: 400;
              color: #333333;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>