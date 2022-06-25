<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:13
 * @LastEditTime: 2021-11-05 17:55:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\NavTop.vue
-->
<template>
  <div class="threeclass">
    <div class="threeclass-header">
      <div class="header" data-aos="zoom-in" data-aos-duration="1000">
        <span class="title">三个课堂建设方案</span>
        <div class="text-box">
          <span class="left">网络课堂</span>
          <img src="~assets/img/threeclass/header/point.png" alt="" />
          <span class="right">提升教学质量</span>
        </div>
      </div>
    </div>
    <div class="threeclass-delivery">
      <img src="~assets/img/threeclass/delivery/img.png" alt="" />
      <div class="delivery">
        <div class="header">
          <img src="~assets/img/threeclass/delivery/icon1.png" alt="" />
          <div class="title-box">
            <span class="title">专递课堂建设方案</span>
            <span class="english">COURIER CLASSROOM</span>
          </div>
        </div>
        <div class="content">
          <div class="box" :key="index" v-for="(item, index) in deliveryList">
            <div class="content-header">
              <img :class="item.iconClass" :src="item.icon" alt="" />
              <p class="content-title">{{ item.title }}</p>
            </div>
            <p class="content-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="threeclass-teacher"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div class="teacher">
        <div class="header">
          <img src="~assets/img/threeclass/teacher/icon1.png" alt="" />
          <div class="title-box">
            <span class="title">名师课堂建设方案</span>
            <span class="english">FAMOUS TEACHERS' CLASSROOM</span>
          </div>
        </div>
        <div class="content">
          <div class="box" :key="index" v-for="(item, index) in teacherList">
            <div class="content-header">
              <img :class="item.iconClass" :src="item.icon" alt="" />
              <span class="content-title">{{ item.title }}</span>
            </div>
            <p class="content-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
      <img src="~assets/img/threeclass/teacher/img.png" alt="" />
    </div>
    <div
      class="threeclass-school"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <img src="~assets/img/threeclass/school/img.png" alt="" />
      <div class="school">
        <div class="header">
          <img src="~assets/img/threeclass/school/icon1.png" alt="" />
          <div class="title-box">
            <span class="title">名校网络课堂建设方案</span>
            <span class="english">FAMOUS SCHOOL ONLINE CLASSROOM</span>
          </div>
        </div>
        <div class="content">
          <div class="box" :key="index" v-for="(item, index) in schoolList">
            <div class="content-header">
              <img :class="item.iconClass" :src="item.icon" alt="" />
              <span class="content-title">{{ item.title }}</span>
            </div>
            <p class="content-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="product-terminal">
      <div
        class="terminal-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt="" />
        <span class="title">产品终端</span>
        <img src="~assets/img/security/header/right.png" alt="" />
        <span class="english">PRODUCT TERMINAL</span>
      </div>
      <div
        class="terminal-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in terminalList">
          <img :src="item.img" alt="" />
          <span>{{ item.text }}</span>
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
      deliveryList: [
        {
          icon: require("assets/img/threeclass/delivery/icon2.png"),
          title: "同步线上课程",
          text: "不同区域课堂同时上课，开展互动教学模式",
        },
        {
          icon: require("assets/img/threeclass/delivery/icon3.png"),
          title: "统一上课时间",
          text: "为帮助师资薄弱区域，设置统一上课时间课表",
        },
        {
          iconClass: "icon3",
          icon: require("assets/img/threeclass/delivery/icon4.png"),
          title: "课堂统一管理",
          text: "助教实时监测课堂中学生的学习状态",
        },
        {
          icon: require("assets/img/threeclass/delivery/icon5.png"),
          title: "课后资源共享",
          text: "课堂直播教学视频自动留存，各区域单独管理",
        },
      ],
      teacherList: [
        {
          iconClass: "icon1",
          icon: require("assets/img/threeclass/teacher/icon2.png"),
          title: "线上直播教学",
          text: "薄弱区域老师通过线上观看名师教学直播，为薄弱地区老师提供教学学习平台",
        },
        {
          iconClass: "icon2",
          icon: require("assets/img/threeclass/teacher/icon3.png"),
          title: "课堂远程指导",
          text: "名校的老师与薄弱地区老师进行双师互动教学，提高薄弱地区老师的教学水平",
        },
        {
          iconClass: "icon3",
          icon: require("assets/img/threeclass/teacher/icon4.png"),
          title: "线上教学教研",
          text: "全地区的学校和教研单位组织线上教研，实现教学水平整体提高",
        },
      ],
      schoolList: [
        {
          iconClass: "icon1",
          icon: require("assets/img/threeclass/school/icon2.png"),
          title: "名校资源多元化",
          text: "线上丰富优质的教学资源，能够让学生学到各式各样的课程，从而积累更多的除书本以外的知识",
        },
        {
          iconClass: "icon2",
          icon: require("assets/img/threeclass/school/icon3.png"),
          title: "教学教研资源",
          text: "实现课程教学教研资源全地区的有效流通，促进优质的教学资源实时共享",
        },
      ],
      terminalList: [
        {
          img: require("assets/img/threeclass/terminal/img1.png"),
          text: "ETBox",
        },
        {
          img: require("assets/img/threeclass/terminal/img2.png"),
          text: "ETMic",
        },
        {
          img: require("assets/img/threeclass/terminal/img3.png"),
          text: "ETCamera",
        },
        {
          img: require("assets/img/threeclass/terminal/img4.png"),
          text: "ETCenter",
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
.threeclass {
  .threeclass-header {
    height: 540px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(~assets/img/threeclass/header/background.gif);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 72px;
        font-weight: 500;
        color: #00ffff;
        margin-bottom: 25px;
      }
      .text-box {
        width: 410px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 35px;
        font-weight: 400;
        color: #00ffff;
        letter-spacing: 3px;
        img {
          width: 8px;
        }
      }
    }
  }
  .threeclass-delivery {
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 571px;
      height: 341px;
    }
    .delivery {
      width: 570px;
      .header {
        display: flex;
        margin-bottom: 35px;
        img {
          width: 38px;
          height: 35px;
          margin-top: 2px;
          margin-left: 6px;
          margin-right: 17px;
        }
        .title-box {
          width: 333px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .title {
            font-size: 40px;
            font-weight: bold;
            color: #333333;
            line-height: 40px;
            margin-bottom: 9px;
          }
          .english {
            font-size: 22px;
            font-weight: 400;
            color: #333333;
            line-height: 24px;
          }
        }
      }
      .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .box {
          width: 280px;
          height: 130px;
          border: 1px solid #dcdcdc;
          position: relative;
          &:nth-child(1),
          &:nth-child(2) {
            margin-bottom: 10px;
          }
          .content-header {
            width: 194px;
            height: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 13px;
            margin-top: 22px;
            margin-bottom: 11px;
            img {
              width: 30px;
              height: 30px;
            }
            .icon3 {
              height: 20px;
            }
            .content-title {
              font-size: 24px;
              font-weight: 400;
              color: #333333;
              line-height: 24px;
            }
          }
          .content-text {
            width: 200px;
            font-size: 18px;
            font-weight: 400;
            color: #666666;
            line-height: 24px;
            margin-left: 64px;
          }
        }
      }
    }
  }
  .threeclass-teacher {
    width: 1150px;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .teacher {
      .header {
        display: flex;
        margin-bottom: 35px;
        img {
          width: 37px;
          height: 35px;
          margin-top: 2px;
          margin-left: 7px;
          margin-right: 20px;
        }
        .title-box {
          width: 370px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .title {
            font-size: 40px;
            font-weight: bold;
            color: #333333;
            line-height: 40px;
            letter-spacing: 6px;
            margin-bottom: 9px;
          }
          .english {
            font-size: 22px;
            font-weight: 400;
            color: #333333;
            line-height: 24px;
          }
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        .box {
          width: 420px;
          height: 130px;
          border: 1px solid #dcdcdc;
          &:first-child {
            margin-bottom: 8px;
          }
          &:nth-child(2) {
            margin-left: 75px;
            margin-bottom: 8px;
          }
          &:last-child {
            margin-left: 150px;
          }
          .content-header {
            width: 195px;
            height: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 14px;
            margin-top: 22px;
            margin-bottom: 13px;
            .icon1 {
              width: 30px;
              height: 27px;
            }
            .icon2 {
              width: 26px;
              height: 28px;
            }
            .icon3 {
              width: 32px;
              height: 25px;
            }
            .content-title {
              width: 145px;
              font-size: 24px;
              font-weight: 400;
              color: #333333;
              line-height: 24px;
            }
          }
          .content-text {
            width: 342px;
            font-size: 18px;
            font-weight: 400;
            color: #666666;
            line-height: 24px;
            margin-left: 64px;
          }
        }
      }
    }
    img {
      width: 506px;
      height: 438px;
    }
  }
  .threeclass-school {
    width: 1150px;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 559px;
      height: 327px;
    }
    .school {
      .header {
        display: flex;
        margin-bottom: 35px;
        img {
          width: 37px;
          height: 34px;
          margin-top: 2px;
          margin-left: 7px;
          margin-right: 25px;
        }
        .title-box {
          width: 440px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .title {
            font-size: 40px;
            font-weight: bold;
            color: #333333;
            line-height: 40px;
            letter-spacing: 4px;
            margin-bottom: 9px;
          }
          .english {
            font-size: 22px;
            font-weight: 400;
            color: #333333;
            line-height: 24px;
          }
        }
      }
      .content {
        .box {
          width: 520px;
          height: 130px;
          overflow: hidden;
          border: 1px solid #dcdcdc;
          &:first-child {
            margin-bottom: 10px;
          }
          .content-header {
            width: 217px;
            height: 28px;
            display: flex;
            align-items: center;
            margin-left: 14px;
            margin-top: 24px;
            margin-bottom: 13px;
            .icon1 {
              width: 29px;
              height: 27px;
            }
            .icon2 {
              width: 31px;
              height: 25px;
            }
            .content-title {
              font-size: 24px;
              font-weight: 400;
              color: #333333;
              line-height: 24px;
              margin-left: 20px;
            }
          }
          .content-text {
            width: 442px;
            font-size: 18px;
            font-weight: 400;
            color: #666666;
            line-height: 24px;
            margin-left: 64px;
          }
        }
      }
    }
  }
  .product-terminal {
    overflow: hidden;
    .terminal-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 40px;
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
    .terminal-container {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 50px;
      display: flex;
      justify-content: space-between;
      text-align: center;
      .box {
        width: 250px;
        height: 208px;
        img {
          width: 250px;
          height: 161px;
          margin-bottom: 17px;
        }
        span {
          font-size: 30px;
          font-weight: 400;
          color: #000000;
          line-height: 30px;
        }
      }
    }
  }
}
</style>