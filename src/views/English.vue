<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:26
 * @LastEditTime: 2022-03-18 18:24:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\Footer.vue
-->
<template>
  <div class="english">
    <div class="english-header">
      <div class="title" data-aos="zoom-in" data-aos-duration="1000">
        <img class="up" src="~assets/img/english/header/up.png" alt="" />
        <img
          class="bottom"
          src="~assets/img/english/header/bottom.png"
          alt=""
        />
      </div>
    </div>
    <div class="english-features">
      <div class="features-header">
        <img src="~assets/img/security/header/left.png" alt class="img-left" />
        <span class="title">方案特色</span>
        <img
          src="~assets/img/security/header/right.png"
          alt
          class="img-right"
        />
        <span class="english">PROGRAM FEATURES</span>
      </div>
      <div class="features-container">
        <div class="box" :key="index" v-for="(item, index) in featuresList">
          <div class="bigbox">
            <div class="box-up">
              <img :src="item.img" alt="" />
              <span>{{ item.text }}</span>
            </div>
            <div class="box-bottom">
              <span class="title">{{ item.title }}</span>
              <span class="textchild">{{ item.textchild }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="english-advantage">
      <div
        class="advantage-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt class="img-left" />
        <span class="title">方案优势</span>
        <img
          src="~assets/img/security/header/right.png"
          alt
          class="img-right"
        />
        <span class="english">PROGRAM ADVANTAGES</span>
      </div>
      <div
        class="advantage-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in advantageList">
          <img :src="item.img" alt="" />
          <span class="title">{{ item.title }}</span>
          <span class="text">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="english-plan">
      <div
        class="plan-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt class="img-left" />
        <span class="title">产品方案</span>
        <img
          src="~assets/img/security/header/right.png"
          alt
          class="img-right"
        />
        <span class="english">PRODUCT SCHEME</span>
      </div>
      <div
        class="title-father"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div
          @click="change(1)"
          :class="[index == 1 ? 'appear' : '', { isShow: 1 === number }]"
          class="title1"
        >
          英语口语评测
        </div>
        <div
          @click="change(2)"
          :class="[index == 2 ? 'appear' : '', { isShow: 2 === number }]"
          class="title2"
        >
          英语口语考试
        </div>
      </div>
      <div class="evaluating" v-if="1 === number">
        <div
          class="solution-father"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img
            src="~assets/img/english/evaluating-solution/img1.png"
            alt=""
            class="solution-left"
          />
          <div class="solution-right">
            <span class="title">课中英语口语评测解决方案</span>
            <span class="text">
              基于软+硬件的结合方式，学生通过答题器人脸识别功能进行课堂签到，方便记录考勤，同时可以随时在课堂上进行口语的实时评测，老师根据学生的音频数据实时的点评，纠正学生的发音，实现日常的口语训练，帮助学生提升英语口语能力，提升教学效果。
            </span>
          </div>
        </div>
        <div class="introduce">
          <div
            class="introduce-header"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <img src="~assets/img/english/header/border.png" alt="" />
            <span>硬件介绍</span>
          </div>
          <div
            class="introduce-up"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src="~assets/img/english/evaluating-introduce/img1.png"
              alt=""
            />
            <span>
              语音答题器是结合课中英语评测开发的一款终端产品，通过答题器与老师进行互动，精准定位学生的学习情况。以更直观、简便的方式，提高学生的口语能力。
            </span>
          </div>
          <div
            class="introduce-container"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div
              class="box"
              :key="index"
              v-for="(item, index) in introduceList"
            >
              <img :src="item.img" alt="" />
              <span>{{ item.text }}</span>
            </div>
          </div>
        </div>
        <div class="evaluating-process">
          <div
            class="process-header"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <img src="~assets/img/english/header/border.png" alt="" />
            <span>产品流程</span>
          </div>
          <div
            class="process-up"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div
              :class="item.box"
              :key="index"
              v-for="(item, index) in processup1List"
            >
              <span class="up">{{ item.up }}</span>
              <img :class="item.imgClass" :src="item.img" alt="" />
              <span class="bottom">{{ item.bottom }}</span>
            </div>
          </div>
          <div
            class="process-bottom"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div
              :class="item.box"
              :key="index"
              v-for="(item, index) in speakList"
            >
              <span class="title">{{ item.title }}</span>
              <span class="text">{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="exam" v-if="2 === number">
        <div class="exam-solution">
          <div
            class="solution-up"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <img src="~assets/img/english/exam-solution/img1.png" alt="" />
            <div class="solution-right">
              <span class="title">英语口语考试解决方案</span>
              <span class="text">
                英语口语考试解决方案将英语听力和口语合二为一，着重致力于中考和高考等口语考试，为考前，考中至考后制定标准化考试流程。本着公平公正原则，节省阅卷时间，保证评分的稳定性，方便学校进行使用。
              </span>
            </div>
          </div>
          <div
            class="solution-bottom"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div
              :class="item.box"
              :key="index"
              v-for="(item, index) in solutionbottomList"
            >
              <img :src="item.img" alt="" />
              <span>{{ item.text }}</span>
            </div>
          </div>
        </div>
        <div class="exam-process">
          <div
            class="process-header"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <img src="~assets/img/english/header/border.png" alt="" />
            <span>考试流程</span>
          </div>
          <div
            class="process-up"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div
              :class="item.box"
              :key="index"
              v-for="(item, index) in processup2List"
            >
              <span class="up">{{ item.up }}</span>
              <img :class="item.imgClass" :src="item.img" alt="" />
              <span :class="item.bottomClass">{{ item.bottom }}</span>
            </div>
          </div>
          <div
            class="process-container"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div class="box" :key="index" v-for="(item, index) in processList">
              <img :src="item.img" alt="" />
              <div class="content">
                <span class="title">{{ item.title }}</span>
                <span class="text">{{ item.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="case" v-if="1 === number">
      <div
        class="case-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt class="img-left" />
        <span class="title">成功案例</span>
        <img
          src="~assets/img/security/header/right.png"
          alt
          class="img-right"
        />
        <span class="english">SUCCESSFUL CASES</span>
      </div>
      <div
        class="video-father"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box">
          <div class="video">
            <video
              id="video1"
              :controls="!play1"
              ref="huangVideo"
              src="~assets/img/english/evaluating-case/huanggang.mp4"
            ></video>
            <div class="shade" @click="playVideo(1)" v-show="play1"></div>
            <img
              v-show="play1"
              @click="playVideo(1)"
              src="~assets/img/english/evaluating-case/click.png"
              alt=""
            />
          </div>
          <div class="text-father">
            <span>黄冈外国语学院</span>
          </div>
        </div>
        <div class="box">
          <div class="video">
            <video
              id="video2"
              :controls="!play2"
              ref="gaoVideo"
              src="~assets/img/english/evaluating-case/gaoshibei.mp4"
            ></video>
            <div class="shade" @click="playVideo(2)" v-show="play2"></div>
            <img
              v-show="play2"
              @click="playVideo(2)"
              src="~assets/img/english/evaluating-case/click.png"
              alt=""
            />
          </div>
          <div class="text-father">
            <span>高石碑第一中学</span>
          </div>
        </div>
      </div>
    </div>
    <div class="exam-distribution" v-if="2 === number">
      <div
        class="distribution-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" alt class="img-left" />
        <span class="title">考试分布</span>
        <img
          src="~assets/img/security/header/right.png"
          alt
          class="img-right"
        />
        <span class="english">EXAMINATION DISTRIBUTION</span>
      </div>
      <div
        class="background"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div
          :class="item.box"
          :key="index"
          v-for="(item, index) in distributionList"
        >
          <span>{{ item.text }}</span>
        </div>
        <img
          class="img1"
          src="~assets/img/english/exam-distribution/thumbtack.png"
          alt=""
        />
        <img
          class="img2"
          src="~assets/img/english/exam-distribution/thumbtack.png"
          alt=""
        />
        <img
          class="img3"
          src="~assets/img/english/exam-distribution/thumbtack.png"
          alt=""
        />
        <img
          class="img4"
          src="~assets/img/english/exam-distribution/thumbtack.png"
          alt=""
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
      featuresList: [
        {
          img: require("assets/img/english/features/img1.png"),
          text: "英文单词评测",
          title: "英文单词评测",
          textchild: "精确到音标的各个音素进行评分",
        },
        {
          img: require("assets/img/english/features/img2.png"),
          text: "英文句子评测",
          title: "英文句子评测",
          textchild: "通过对句子的完整度、准确度和流利度这三个维度进行评分",
        },
        {
          img: require("assets/img/english/features/img3.png"),
          text: "英文段落评测",
          title: "英文段落评测",
          textchild: "通过对段落的完整度、准确度和流利度这三个维度进行评分",
        },
      ],
      advantageList: [
        {
          img: require("assets/img/english/advantage/img1.png"),
          title: "世界主流语音识别声学建模",
          text: "基于TDNN、LSTM+CTC深度学习的声学建模",
        },
        {
          img: require("assets/img/english/advantage/img2.png"),
          title: "全国领先低功耗技术",
          text: "基于硬件设备（答题器、拾音器）的低功耗，支持嵌入式离线方案",
        },
        {
          img: require("assets/img/english/advantage/img3.png"),
          title: "适用不同年龄段的人群",
          text: "基于儿童、成年等各个年龄段，适配英式、美式发音",
        },
        {
          img: require("assets/img/english/advantage/img4.png"),
          title: "减少机房维护费用",
          text: "不需要预约机房，有更多的口语练习时间",
        },
        {
          img: require("assets/img/english/advantage/img5.png"),
          title: "教材资源丰富",
          text: "覆盖全国各个版本教材，海量课件可供选择，并实时更新",
        },
        {
          img: require("assets/img/english/advantage/img6.png"),
          title: "随时随堂练习",
          text: "在课堂上实时评测，纠正学生的发音，实现日常的口语训练",
        },
        {
          img: require("assets/img/english/advantage/img7.png"),
          title: "构建学生学习模型",
          text: "实时采集学生的数据，通过语音识别、口语评测等技术在云端全程数字化并形成学生的模型",
        },
        {
          img: require("assets/img/english/advantage/img8.png"),
          title: "提高课堂互动性",
          text: "通过学生模型分析学生对知识点的掌握程度和学习态度，更好的激励学生的学习兴趣和信心",
        },
      ],
      introduceList: [
        {
          img: require("assets/img/english/evaluating-introduce/icon1.png"),
          text: "舒适按键，可视化屏幕",
        },
        {
          img: require("assets/img/english/evaluating-introduce/icon2.png"),
          text: "屏幕采用点阵式设计，支持标准汉字编码，可显示绑定后学生的姓名",
        },
        {
          img: require("assets/img/english/evaluating-introduce/icon3.png"),
          text: "支持多种题型：语音评测，单/多选，判断",
        },
        {
          img: require("assets/img/english/evaluating-introduce/icon4.png"),
          text: "屏下3孔麦克风，声源定位精准",
        },
        {
          img: require("assets/img/english/evaluating-introduce/icon5.png"),
          text: "与后台系统实时传输数据，评测结束，实时显示评分",
        },
        {
          img: require("assets/img/english/evaluating-introduce/icon6.png"),
          text: "实时显示Wifi动态和电池用量情况",
        },
      ],
      processup1List: [
        {
          box: "box1",
          imgClass: "img1",
          img: require("assets/img/english/evaluating-process/img1.png"),
          bottom: "答题器",
        },
        {
          box: "box2",
          up: "开始录音",
          imgClass: "img2",
          img: require("assets/img/english/evaluating-process/circle.png"),
          bottom: "发送评测音频",
        },
        {
          box: "box3",
          imgClass: "img3",
          img: require("assets/img/english/evaluating-process/img2.png"),
          bottom: "服务器",
        },
        {
          box: "box4",
          up: "发送评测文本",
          imgClass: "img4",
          img: require("assets/img/english/evaluating-process/circle.png"),
          bottom: "评测音频+评测结果",
        },
        {
          box: "box5",
          imgClass: "img5",
          img: require("assets/img/english/evaluating-process/img3.png"),
          bottom: "大屏",
        },
      ],
      speakList: [
        {
          box: "box1",
          title: "口语学习",
          text: "将教材中的口语练习的内容提前导入系统，根据单词、句子或段落的标准音频进行口语学习",
        },
        {
          box: "box2",
        },
        {
          box: "box3",
          title: "口语练习",
          text: "对学生的英语口语发音、语调、准确性等进行全方位的评估，并生成学情报告",
        },
        {
          box: "box4",
        },
        {
          box: "box5",
          title: "口语评估",
          text: "随时在课堂上进行口语的练习",
        },
      ],
      solutionbottomList: [
        {
          box: "box1",
          img: require("assets/img/english/exam-solution/icon1.png"),
          text: "公平公正",
        },
        {
          box: "box2",
        },
        {
          box: "box3",
          img: require("assets/img/english/exam-solution/icon2.png"),
          text: "标准流程",
        },
        {
          box: "box4",
        },
        {
          box: "box5",
          img: require("assets/img/english/exam-solution/icon3.png"),
          text: "智能评分",
        },
      ],
      processup2List: [
        {
          box: "box1",
          imgClass: "img1",
          img: require("assets/img/english/exam-process/img1.png"),
          bottomClass: "text1",
          bottom: "管理机",
        },
        {
          box: "box2",
          up: "考场编排  考试题库",
          imgClass: "img2",
          img: require("assets/img/english/exam-process/arrow.png"),
          bottomClass: "text2",
          bottom: "答卷汇总  等待批改",
        },
        {
          box: "box3",
          imgClass: "img3",
          img: require("assets/img/english/exam-process/img2.png"),
          bottomClass: "text3",
          bottom: "监考机",
        },
        {
          box: "box4",
          up: "考卷发放  实时监测",
          imgClass: "img4",
          img: require("assets/img/english/exam-process/arrow.png"),
          bottomClass: "text4",
          bottom: "设备测试  提交答卷",
        },
        {
          box: "box5",
          imgClass: "img5",
          img: require("assets/img/english/exam-process/img3.png"),
          bottomClass: "text5",
          bottom: "考试机",
        },
      ],
      processList: [
        {
          img: require("assets/img/english/exam-process/icon1.png"),
          title: "考前",
          text: "考场编排 设备测试",
        },
        {
          img: require("assets/img/english/exam-process/icon2.png"),
          title: "考中",
          text: "正式考试 实时监测",
        },
        {
          img: require("assets/img/english/exam-process/icon3.png"),
          title: "考后",
          text: "系统评分 成绩上传",
        },
      ],
      distributionList: [
        {
          box: "box1",
          text: "山东省",
        },
        {
          box: "box2",
          text: "河南省",
        },
        {
          box: "box3",
          text: "江苏省",
        },
        {
          box: "box4",
          text: "湖北省",
        },
      ],
      index: 1,
      number: 1,
      index2: 1,
      number2: 1,
      play1: true,
      play2: true,
      huangRef: "",
      gaoRef: "",
    };
  },
  components: {},
  computed: {},
  methods: {
    change(i) {
      this.index = i;
      this.number = i;
    },
    play1End() {
      this.huangRef.currentTime = 0;
      this.play1 = true;
    },
    play2End() {
      this.gaoRef.currentTime = 0;
      this.play2 = true;
    },
    playVideo(num) {
      if (num === 1) {
        // 黄冈播放，先判断石碑是否播放，若在播则停止
        if (!this.gaoRef.paused || this.gaoRef.currentTime > 0) {
          this.gaoRef.pause();
          this.gaoRef.currentTime = 0;
          this.play2 = true;
        }
        this.play1 = false;
        this.huangRef.play();
      } else {
        // 石碑播放
        if (!this.huangRef.paused || this.huangRef.currentTime > 0) {
          this.huangRef.pause();
          this.huangRef.currentTime = 0;
          this.play1 = true;
        }
        this.play2 = false;
        this.gaoRef.play();
      }
    },
  },
  mounted() {
    AOS.init();
    // 你也可以在这里设置全局配置
    AOS.init({
      duration: 1500,
    });
    this.$nextTick(() => {
      this.huangRef = this.$refs.huangVideo;
      this.gaoRef = this.$refs.gaoVideo;
      this.huangRef.addEventListener("ended", this.play1End, false);
      this.gaoRef.addEventListener("ended", this.play2End, false);
    });
  },
  updated() {},
  destroyed() {
    this.huangRef.removeEventListener("ended", this.play1End, false);
    this.gaoRef.removeEventListener("ended", this.play2End, false);
  },
};
</script>
<style lang="scss" scoped>
.english {
  .english-header {
    height: 540px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(~assets/img/english/header/background.gif);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    .title {
      width: 1102px;
      height: 172px;
      position: relative;
      .up {
        width: 1102px;
        position: absolute;
      }
      .bottom {
        width: 704px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
  .english-features {
    margin-bottom: 50px;
    .features-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      text-align: center;
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
      width: 960px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .box {
        width: 223px;
        height: 223px;
        background: #ffffff;
        border: 1px solid #bbbbbb;
        border-radius: 5px;
        overflow: hidden;
        &:first-child {
          .bigbox {
            .box-bottom {
              .textchild {
                margin-bottom: 50px;
              }
            }
          }
        }
        &:hover {
          .box-up {
            opacity: 0;
          }
          .bigbox {
            transition: all 0.5s linear;
            margin-top: -223px;
          }
        }
        .bigbox {
          height: 446px;
          .box-up {
            height: 223px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
              width: 90px;
              height: 90px;
              margin-bottom: 22px;
            }
            span {
              font-size: 22px;
              font-weight: 400;
              color: #333333;
              line-height: 24px;
            }
          }
          .box-bottom {
            height: 223px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .title {
              font-size: 22px;
              font-weight: bold;
              color: #333333;
              line-height: 24px;
              margin-bottom: 25px;
            }
            .textchild {
              width: 160px;
              font-size: 20px;
              font-weight: 400;
              color: #333333;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
  .english-advantage {
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
      width: 1201px;
      margin: 0 auto;
      margin-bottom: 45px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:first-child {
          width: 300px;
          margin-right: 74px;
          margin-bottom: 40px;
          .text {
            width: 178px;
            margin-bottom: 24px;
          }
        }
        &:nth-child(2) {
          width: 225px;
          margin-right: 75px;
          margin-bottom: 40px;
          .text {
            width: 176px;
          }
        }
        &:nth-child(3) {
          width: 250px;
          margin-right: 73px;
          margin-bottom: 40px;
          .text {
            width: 176px;
          }
        }
        &:nth-child(4) {
          width: 204px;
          margin-bottom: 40px;
          .text {
            width: 176px;
            margin-bottom: 24px;
          }
        }
        &:nth-child(5) {
          width: 300px;
          margin-right: 74px;
          .text {
            width: 178px;
            margin-bottom: 23px;
          }
        }
        &:nth-child(6) {
          width: 225px;
          margin-right: 75px;
          .text {
            width: 176px;
            margin-bottom: 23px;
          }
        }
        &:nth-child(7) {
          width: 250px;
          margin-right: 73px;
          .text {
            width: 176px;
          }
        }
        &:nth-child(8) {
          width: 204px;
          .text {
            width: 176px;
          }
        }
        img {
          width: 79px;
          height: 79px;
          margin-bottom: 22px;
        }
        .title {
          font-size: 24px;
          font-weight: 500;
          color: #333333;
          margin-bottom: 10px;
        }
        .text {
          font-size: 16px;
          font-weight: 400;
          color: #666666;
          line-height: 24px;
          text-align: left;
        }
      }
    }
  }
  .english-plan {
    width: 1200px;
    margin: 0 auto;
    .plan-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 50px;
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
    .title-father {
      width: 580px;
      height: 30px;
      margin: 0 auto;
      margin-bottom: 36px;
      display: flex;
      justify-content: space-between;
      .title1,
      .title2 {
        font-size: 30px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
        cursor: pointer;
        &:hover {
          color: #1b2382;
        }
      }
      .appear {
        font-size: 30px;
        font-weight: bold;
        color: #1b2382;
        line-height: 24px;
      }
    }
    .evaluating {
      .solution-father {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        .solution-left {
          width: 554px;
          height: 335px;
          margin-right: 79px;
        }
        .solution-right {
          display: flex;
          flex-direction: column;
          .title {
            font-size: 24px;
            font-weight: 500;
            color: #333333;
            line-height: 30px;
            margin-bottom: 22px;
          }
          .text {
            width: 545px;
            font-size: 20px;
            font-weight: 400;
            color: #666666;
            line-height: 30px;
          }
        }
      }
      .introduce {
        margin-bottom: 40px;
        .introduce-header {
          width: 130px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          img {
            width: 8px;
            height: 35px;
            margin-right: 20px;
          }
          span {
            font-size: 24px;
            font-weight: bold;
            color: #333333;
            line-height: 30px;
          }
        }
        .introduce-up {
          width: 1100px;
          margin-left: 78px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          img {
            width: 512px;
            height: 216px;
          }
          span {
            width: 545px;
            font-size: 20px;
            font-weight: 400;
            color: #666666;
            line-height: 30px;
          }
        }
        .introduce-container {
          width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .box {
            width: 426px;
            display: flex;
            align-items: center;
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4) {
              margin-bottom: 50px;
            }
            img {
              width: 52px;
              height: 52px;
              margin-right: 16px;
            }
            span {
              width: 358px;
              font-size: 18px;
              font-weight: 400;
              color: #333333;
              line-height: 24px;
            }
          }
        }
      }
      .evaluating-process {
        overflow: hidden;
        .process-header {
          width: 130px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
          img {
            width: 8px;
            height: 35px;
            margin-right: 20px;
          }
          span {
            font-size: 24px;
            font-weight: bold;
            color: #333333;
            line-height: 30px;
          }
        }
        .process-up {
          width: 1010px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 36px;
          .box1,
          .box2,
          .box3,
          .box4,
          .box5 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .up {
              font-size: 18px;
              font-weight: 400;
              color: #333333;
              margin-bottom: 5px;
            }
            .bottom {
              font-size: 18px;
              font-weight: 400;
              color: #333333;
            }
            .img1 {
              width: 68px;
              height: 160px;
              margin-bottom: 15px;
            }
            .img2 {
              width: 265px;
              height: 86px;
              margin-bottom: 5px;
            }
            .img3 {
              width: 67px;
              height: 128px;
              margin-bottom: 31px;
            }
            .img4 {
              width: 265px;
              height: 86px;
              margin-bottom: 5px;
            }
            .img5 {
              width: 209px;
              height: 144px;
              margin-bottom: 23px;
            }
          }
        }
        .process-bottom {
          width: 1000px;
          margin: 0 auto;
          margin-bottom: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .box1,
          .box3,
          .box5 {
            width: 306px;
            height: 201px;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url(~assets/img/english/evaluating-process/box.png);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .title {
              font-size: 24px;
              font-weight: 400;
              color: #333333;
              line-height: 30px;
              margin-bottom: 20px;
            }
            .text {
              font-size: 18px;
              font-weight: 400;
              color: #666666;
              line-height: 30px;
              text-align: left;
            }
          }
          .box1 {
            .text {
              width: 252px;
            }
          }
          .box3 {
            .text {
              width: 252px;
            }
          }
          .box2,
          .box4 {
            width: 28px;
            height: 9px;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url(~assets/img/english/evaluating-process/arrow.png);
          }
          .box5 {
            .text {
              margin-bottom: 60px;
            }
          }
        }
      }
    }
    .exam {
      .exam-solution {
        margin-bottom: 36px;
        .solution-up {
          width: 1050px;
          margin: 0 auto;
          margin-left: 110px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          img {
            width: 321px;
            height: 338px;
            margin-left: 20px;
          }
          .solution-right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .title {
              font-size: 24px;
              font-weight: 500;
              color: #333333;
              line-height: 30px;
              margin-bottom: 25px;
            }
            .text {
              width: 545px;
              font-size: 20px;
              font-weight: 400;
              color: #666666;
              line-height: 30px;
            }
          }
        }
        .solution-bottom {
          width: 1050px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .box1,
          .box3,
          .box5 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
              width: 131px;
              height: 131px;
              margin-bottom: 3px;
            }
            span {
              font-size: 24px;
              font-weight: 400;
              color: #333333;
              line-height: 30px;
            }
          }
          .box2,
          .box4 {
            width: 274px;
            height: 10px;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url(~assets/img/english/exam-solution/line.png);
            margin-top: -40px;
          }
        }
      }
      .exam-process {
        overflow: hidden;
        .process-header {
          width: 130px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 36px;
          img {
            width: 8px;
            height: 35px;
            margin-right: 20px;
          }
          span {
            font-size: 24px;
            font-weight: bold;
            color: #333333;
            line-height: 30px;
          }
        }
        .process-up {
          width: 1010px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 33px;
          .box1,
          .box2,
          .box3,
          .box4,
          .box5 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .up {
              font-size: 16px;
              font-weight: 400;
              color: #666666;
              line-height: 16px;
              // margin-bottom: 4px;
            }
            .img1,
            .img5 {
              width: 120px;
              height: 85px;
              margin-bottom: 1px;
            }
            .img3{
              width: 100px;
              height:84px;
            }
            .img2,
            .img4 {
              width: 269px;
              height: 13px;
              // margin-bottom: 6px;
            }
            .text1,
            .text3,
            .text5 {
              font-size: 18px;
              font-weight: 400;
              color: #333333;
              line-height: 18px;
              margin-top:18px;
            }
            .text2,
            .text4 {
              font-size: 16px;
              font-weight: 400;
              color: #666666;
              line-height: 16px;
            }
          }
          .box2,
          .box4 {
            margin-top: -40px;
          }
        }
        .process-container {
          width: 450px;
          margin: 0 auto;
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .box {
            width: 450px;
            height: 123px;
            display: flex;
            justify-content: space-between;
            &:nth-child(1),
            &:nth-child(2) {
              margin-bottom: 25px;
            }
            img {
              width: 254px;
              height: 121px;
              margin-right: 22px;
            }
            .content {
              width: 173px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top: -13px;
              .title {
                font-size: 24px;
                font-weight: bold;
                color: #333333;
                line-height: 30px;
                margin-bottom: 3px;
              }
              .text {
                font-size: 20px;
                font-weight: 400;
                color: #333333;
                line-height: 30px;
              }
            }
          }
        }
      }
    }
  }
  .case {
    background: rgba(220, 220, 220, 0.25);
    overflow: hidden;
    .case-header {
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
    .video-father {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
      .box {
        .video {
          width: 567px;
          height: 326px;
          position: relative;
          .shade {
            width: 567px;
            height: 326px;
            cursor: pointer;
            position: absolute;
            top: 0;
            z-index: 1;
          }
          video {
            width: 100%;
            height: 100%;
          }
          img {
            width: 92px;
            height: 98px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
          }
        }
        .text-father {
          width: 567px;
          height: 60px;
          background: #ffffff;
          border: 1px solid #c2c2c2;
          text-align: center;
          padding-top: 19px;
          span {
            font-size: 24px;
            font-weight: 400;
            color: #666666;
            line-height: 24px;
          }
        }
      }
    }
  }
  .exam-distribution {
    margin-right: 0;
    margin-left: 0;
    overflow: hidden;
    background: rgba(220, 220, 220, 0.25);
    .distribution-header {
      width: 700px;
      height: 90px;
      margin: 50px auto;
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
    .background {
      width: 683px;
      height: 527px;
      margin: 0 auto;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(~assets/img/english/exam-distribution/img1.png);
      position: relative;
      margin-bottom: 50px;
      .box1,
      .box2,
      .box3,
      .box4 {
        width: 90px;
        height: 30px;
        background: #000000;
        opacity: 0.8;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        span {
          font-size: 18px;
          font-weight: 400;
          color: #ffffff;
          line-height: 24px;
        }
      }
      .box1 {
        top: 161px;
        right: 76px;
      }
      .box2 {
        top: 217px;
        right: 186px;
      }
      .box3 {
        top: 251px;
        right: 34px;
      }
      .box4 {
        top: 274px;
        right: 193px;
      }
      .img1,
      .img2,
      .img3,
      .img4 {
        width: 20px;
        height: 20px;
        position: absolute;
      }
      .img1 {
        top: 197px;
        right: 112px;
      }
      .img2 {
        top: 223px;
        right: 161px;
      }
      .img3 {
        top: 228px;
        right: 71px;
      }
      .img4 {
        top: 263px;
        right: 171px;
      }
    }
  }
}
</style>