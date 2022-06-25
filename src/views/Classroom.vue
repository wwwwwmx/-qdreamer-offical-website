<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:26
 * @LastEditTime: 2022-01-17 20:16:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\Footer.vue
-->
<template>
  <div class="classroom">
    <div class="classroom-header">
      <div class="header" data-aos="zoom-in" data-aos-duration="1000">
        <span class="title">智慧教室建设方案</span>
        <span class="text">构建软硬一体化智能化教学模式</span>
      </div>
    </div>
    <div class="classroom-introduce">
      <img src="~assets/img/classroom/introduce/img1.gif" alt="" />
      <span
        >奇梦者智慧教室打破传统教室的布局，以人工智能信息化的技术理念为创新目标，实现一整套的智能教学模式，包括人脸识别自动考勤、优质教学资源、录播课堂、互动课堂以及学情分析评估等新型应用。从而提高学生上课互动的积极性，以智能化管理为核心目标的教学模式。</span
      >
    </div>
    <div class="classroom-features">
      <div
        class="features-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" />
        <span class="title">方案特点</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">PROGRAM FEATURES</span>
      </div>
      <div
        class="features-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in featuresList">
          <img :src="item.img" alt="" />
          <span class="title">{{ item.title }}</span>
          <span class="text">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="classroom-advantage">
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
          <img :src="item.img" alt="" />
          <div class="text-box">
            <span class="title">{{ item.title }}</span>
            <span class="text">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
export default {
  data() {
    return {
      featuresList: [
        {
          img: require("assets/img/classroom/features/img1.png"),
          title: "规模化管理",
          text: "同时管理多个教室、PC端和APP端远程控制",
        },
        {
          img: require("assets/img/classroom/features/img2.png"),
          title: "多样化教学",
          text: "教师可开展双师课堂、录播课堂、互动课堂等多样化教学模式；丰富教学资源可供选择",
        },
        {
          img: require("assets/img/classroom/features/img3.png"),
          title: "智能化识别",
          text: "替换传统上课点名的考勤方式，通过人脸识别，即可记录学生考勤状态，且实时监测学生学习状态",
        },
      ],
      advantageList: [
        {
          img: require("assets/img/classroom/advantage/img1.png"),
          title: "扩音系统",
          text: "扩音系统集合了数字红外技术与智能中控技术。内置8个多频扩音单元，声压级可达109dB；且安装便捷，结构精巧，功能强大，改善教学环境",
        },
        {
          img: require("assets/img/classroom/advantage/img2.png"),
          title: "全向吊麦",
          text: "360度拾音麦克风星型阵列，支持数字和模拟输出。拾音覆盖范围达60平方米，吊挂式安装，远距离且宽范围的拾音，同时也可有效的消除麦克风的杂声，使音质更加清晰",
        },
        {
          img: require("assets/img/classroom/advantage/img3.png"),
          title: "鸿合阵列音箱",
          text: "替换传统音箱的大体积设计，鸿合将摄像头集成在音箱内，具有4mic阵列，10米远距离拾音等特性，体积较小，安装方便，提高高质量教学课堂",
        },
        {
          img: require("assets/img/classroom/advantage/img4.png"),
          title: "多屏互动教学",
          text: "未到同学可通过手机或电脑登录直播课堂进入到课堂内进行学习，也可同步接收到老师分发的作业训练题，及时跟上进度",
        },
        {
          img: require("assets/img/classroom/advantage/img5.png"),
          title: "智能管理系统",
          text: "通过人脸识别功能自动记录考勤情况，同时每日、每周或每月都会汇总考勤报告发至教师、学生家长和学生。同时也会实时监测学生的上课状态，并对每位学生积极性以及懒惰性形成学情分析报告",
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
.classroom {
  .classroom-header {
    height: 540px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(~assets/img/classroom/header/background.gif);
    margin-bottom: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 72px;
        font-weight: 500;
        color: #00ffff;
        text-shadow: 5px 8px 5px rgba(51, 51, 51, 0.24);
        margin-bottom: 24px;
      }
      .text {
        font-size: 35px;
        font-weight: 400;
        color: #00ffff;
        text-shadow: 5px 8px 5px rgba(51, 51, 51, 0.24);
      }
    }
  }
  .classroom-introduce {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    img {
      width: 482px;
      height: 360px;
    }
    span {
      width: 659px;
      font-size: 30px;
      font-weight: 400;
      color: #333333;
      line-height: 45px;
    }
  }
  .classroom-features {
    overflow: hidden;
    background: rgba(220, 220, 220, 0.25);
    margin-bottom: 50px;
    .features-header {
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
    .features-container {
      width: 900px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:nth-child(1) {
          .text {
            width: 223px;
            margin-bottom: 48px;
          }
        }
        &:nth-child(2),
        &:nth-child(3) {
          .text {
            width: 216px;
          }
        }
        &:nth-child(2) {
          margin-left: -12px;
        }
        img {
          width: 135px;
          height: 135px;
          margin-bottom: 30px;
        }
        .title {
          font-size: 22px;
          font-weight: 400;
          color: #333333;
          line-height: 24px;
          margin-bottom: 5px;
        }
        .text {
          width: 226px;
          font-size: 18px;
          font-weight: 400;
          color: #666666;
          line-height: 24px;
        }
      }
    }
  }
  .classroom-advantage {
    overflow: hidden;
    .advantage-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 40px;
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
      width: 1000px;
      margin: 0 auto;
      margin-bottom: 30px;
      .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          margin-bottom: 6px;
        }
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5) {
          .text-box {
            margin-bottom: 13px;
          }
        }
        img {
          width: 400px;
          height: 224px;
        }
        .text-box {
          display: flex;
          flex-direction: column;
          .title {
            font-size: 28px;
            font-weight: 500;
            color: #333333;
            margin-bottom: 10px;
          }
          .text {
            width: 564px;
            font-size: 24px;
            font-weight: 400;
            color: #666666;
            line-height: 31px;
          }
        }
      }
    }
  }
}
</style>