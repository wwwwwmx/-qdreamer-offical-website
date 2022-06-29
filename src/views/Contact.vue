<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:26
 * @LastEditTime: 2022-02-16 16:19:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\Footer.vue
-->
<template>
  <div class="contact">
    <div class="contact-header">
      <img class="img1" src="~assets/img/contact/header/img1.png" alt="" />
      <img class="img2" src="~assets/img/contact/header/img2.png" alt="" />
      <img class="img3" src="~assets/img/contact/header/img3.png" alt="" />
      <img class="img4" src="~assets/img/contact/header/img4.png" alt="" />
      <img class="img5" src="~assets/img/contact/header/img5.png" alt="" />
      <img class="img6" src="~assets/img/contact/header/img6.png" alt="" />
      <img class="img7" src="~assets/img/contact/header/img7.png" alt="" />
      <span data-aos="zoom-in" data-aos-duration="1000">加入|联系我们</span>
    </div>
    <div class="contact-container">
      <div class="employment">
        <div class="header">
          <div
            @click="
              change(1);
              show(1);
            "
            :class="[index == 1 ? 'appear' : '', { isShow: 1 === number }]"
            class="social"
          >
            <div class="title">社会招聘</div>
          </div>
          <div
            @click="
              change(2);
              show(2);
            "
            :class="[index == 2 ? 'appear' : '', { isShow: 2 === number }]"
            class="school"
          >
            <div class="title">校园招聘</div>
          </div>
        </div>
        <el-table
          :data="tableList"
          style="
            width: 100%;
            border: 1px solid #d2d2d2;
            border-radius: 8px 8px 0px 0px;
          "
          :cell-style="cellStyle"
          :header-cell-style="headerStyle"
          @cell-click="openRowDetail"
        >
          <el-table-column prop="name" label="职位名称" width="300">
          </el-table-column>
          <el-table-column prop="kind" label="部门类别" width="600">
          </el-table-column>
          <el-table-column prop="number" label="招聘人数"> </el-table-column>
          <el-table-column prop="arrow" width="100">
            <template>
              <el-button type="text">
                <img
                  src="~assets/img/contact/employment/arrow.png"
                  alt=""
                  style="width: 7px; height: 12px;`"
              /></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="contactus">
      <div
        class="contactus-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" />
        <span class="title">联系我们</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">CONTACT US</span>
      </div>
      <div
        class="contactus-container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="box" :key="index" v-for="(item, index) in ContactusList">
          <img :src="item.img" alt="" />
          <span class="title">{{ item.title }}</span>
          <div class="border"></div>
          <div class="box-father">
            <div class="box1">
              <img class="img1" :src="item.img1" alt="" />
              <span class="text">{{ item.text }}</span>
            </div>
            <div class="box2">
              <img class="img2" :src="item.img2" alt="" />
              <span class="text2">{{ item.text2 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-address">
      <div
        class="address-header"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/security/header/left.png" />
        <span class="title">公司地址</span>
        <img src="~assets/img/security/header/right.png" />
        <span class="english">COMPANY ADDRESS</span>
      </div>
      <div
        class="address-area"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="~assets/img/contact/address/address.png" alt="" />
        <span>苏州工业园区若水路388号纳米科技国家大学科技园E栋1905</span>
      </div>
      <baidu-map
        class="bm-view"
        :center="{ lng: 120.745, lat: 31.2643 }"
        :zoom="17"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <bm-marker
          :position="{ lng: 120.745, lat: 31.2643 }"
          :dragging="true"
          @click="infoWindowOpen"
          animation="BMAP_ANIMATION_BOUNCE"
        >
          <bm-info-window
            class="info"
            :show="mapshow"
            @close="infoWindowClose"
            @open="infoWindowOpen"
          >
            <p>苏州工业园区若水路388号</p>
            <p>纳米科技国家大学科技园E栋1905</p>
          </bm-info-window>
        </bm-marker>
      </baidu-map>
    </div>
    <InviteDialog ref="invite" />
  </div>
</template>
<script >
import InviteDialog from "cpom/public/InviteDialog";
import AOS from "aos";
export default {
  data() {
    return {
      index: 1,
      number: 1,
      map: "",
      dialogVisible: false,
      mapshow: false,
      socialData: [
        {
          name: "销售经理（智慧教育）",
          kind: "销售部",
          number: "若干",
          key: 1,
        },
        {
          name: "销售总监（消费电子）",
          kind: "销售部",
          number: "若干",
          key: 2,
        },
        {
          name: "语音信号算法研究员",
          kind: "研究部",
          number: "若干",
          key: 3,
        },
        {
          name: "语音识别算法研究员",
          kind: "研究部",
          number: "若干",
          key: 4,
        },
        {
          name: "高级嵌入式开发工程师",
          kind: "开发部",
          number: "若干",
          key: 5,
        },
        {
          name: "C语言开发工程师",
          kind: "开发部",
          number: "若干",
          key: 6,
        },
      ],
      schoolData: [
        {
          name: "Android工程师",
          kind: "开发部",
          number: "若干",
          key: 7,
        },
        {
          name: "Java开发工程师",
          kind: "开发部",
          number: "若干",
          key: 8,
        },
        {
          name: "C开发工程师",
          kind: "开发部",
          number: "若干",
          key: 9,
        },
        {
          name: "售前技术支持工程师",
          kind: "项目部",
          number: "若干",
          key: 10,
        },
        {
          name: "软件测试工程师",
          kind: "项目部",
          number: "若干",
          key: 11,
        },
        {
          name: "语音信号算法研究员",
          kind: "研究部",
          number: "若干",
          key: 12,
        },
        {
          name: "语音识别算法研究员",
          kind: "研究部",
          number: "若干",
          key: 13,
        },
        {
          name: "销售助理",
          kind: "销售部",
          number: "若干",
          key: 14,
        },
      ],
      markerArr: [
        {
          title: "苏州工业园区若水路388号纳米科技国家大学科技园E栋1905",
          content: "",
          point: "120.744785|31.264476",
          isOpen: 0,
          icon: { w: 23, h: 25, l: 46, t: 21, x: 9, lb: 12 },
        },
      ],
      wordList: [
        {
          id: 1,
          title: "销售经理（智慧教育）",
          text1: `<span>1</span>、大专或以上学历，三年及以上销售经验者优先；`,
          text2: `<span>1</span>、负责公司智慧教育产品销售和公立校教育渠道挖掘；\n<span>2</span>、能独立负责一个或者几个区域进行客户拜访，达成商务合作；\n<span>3</span>、负责市场信息收集和反馈，能结合该区域快速开拓市场；\n<span>4</span>、熟悉K12公立校教育产品销售经验者优先考虑。`,
        },
        {
          id: 2,
          title: "销售总监（消费电子）",
          text1: `<span>1</span>、负责智慧终端的智能语音技术解决方案销售，关注智能硬件和人工智能行业，收集市场信息及业务相关的数据并作出分析，供公司决策；\n<span>2</span>、协助一线消费电子产品智慧终端大客户销售；\n<span>3</span>、深入理解公司产品，制定拓展计划，收集并建立合作伙伴资源，拓展、加深合作伙伴关系；`,
          text2: `<span>1</span>、理工科专业毕业，有人工智能行业背景相关经验者优先；\n<span>2</span>、责任心强，细致认真，兼备独立工作能力和团队合作精神；\n<span>3</span>、对穿戴设备、智慧屏、音视频会议、金融设备、消费电子某一个行业。`,
        },
        {
          id: 3,
          title: "语音信号算法研究员",
          text1: `<span>1</span>、硕士学历，电子信息相关专业，数字信号处理方向，声学或者语音信号处理尤佳；\n<span>2</span>、熟悉传统信号处理理论和经典算法，具有噪声抑制/回声消除/语音分离/声源，定位其中一个方面的学术研究经历或者工程研发经历；\n<span>3</span>、对深度学习模型及其在语音信号处理中的应用技术有一定了解；\n<span>4</span>、至少精通1门编程语言，python/matlab/c，熟悉shell编程加分；`,
          text2: `<span>1</span>、语音信号处理算法原型的实现和验证；\n<span>2</span>、根据实际应用需求，对现有算法进行优化；\n<span>3</span>、负责语音信号处理算法前沿研究的跟踪；\n<span>4</span>、与其他同事配合，确保算法的上线运行。`,
        },
        {
          id: 4,
          title: "语音识别算法研究员",
          text1: `<span>1</span>、负责语音识别声学模型，语言模型训练；\n<span>2</span>、跟踪、实验业界最新研究成果；`,
          text2: `<span>1</span>、具备独立思考，探索的能力，对未知领域有极大的热情与钻研精神；\n<span>2</span>、在模式识别、机器学习或者自然语言处理领域有丰富经验；\n<span>3</span>、有声学建模方面实践经验，掌握HTK工具或者kaldi工具；\n<span>4</span>、熟练使用过一种深度学习工具（CNTK，Caffe，Torch等），并且构建过基于深度学习模型。`,
        },
        {
          id: 5,
          title: "高级嵌入式开发工程师",
          text1: `<span>1</span>、负责智能语音系统研发，负责嵌入式系统和网络程序研发；\n<span>2</span>、负责阵列+摄像头多模态产品研发，推进在音视频行业的智能模组落地；`,
          text2: `<span>1</span>、对程序设计有极大的热情，学习能力强，勇于探索未知领域；\n<span>2</span>、有良好的沟通能力、抗压能力和团队协作能力；\n<span>3</span>、熟悉C语言，熟悉常用算法，熟悉linux程序设计，具备工程经验；\n<span>4</span>、熟悉信号处理、图像处理、人脸识别更佳；\n<span>5</span>、加分：\n- 熟悉matlab；\n- 熟悉python语言，了解lua语言；\n- 熟悉nginx的实现；\n- 熟悉makefile、gdb、valgrind、gprof；\n- 熟悉rtos或者其他嵌入式系统。`,
        },
        {
          id: 6,
          title: "C语言开发工程师",
          text1: `<span>1</span>、负责公司阵列产品线的研发交付，主要开发任务包括，阵列音箱方案、对话系统及SDK的开发与维护工作；\n<span>2</span>、承担C/python/lua的开发工作；\n<span>3</span>、项目对接与阵列产品方案完善；`,
          text2: `<span>1</span>、全日制本科及以上学历，工作经验不限，可实习；\n<span>2</span>、熟悉linux平台下C编程，熟悉python、lua等优先考虑；\n<span>3</span>、有过大型C工程的开发或调试经验者优先；\n<span>4</span>、具备快速学习和独立解决问题的能力，有较强的责任心和抗压能力。`,
        },
        {
          id: 7,
          title: "Android 工程师",
          text1: `<span>1</span>、基于Android平台进行APP应用设计和开发；\n<span>2</span>、Android平台应用软件的产品开发、维护、BUG修改和完善；\n<span>3</span>、根据产品需求完成需求分析、模块设计、编码、等工作；`,
          text2: `<span>1</span>、对程序设计有极大的热情，勇于探索未知领域；\n<span>2</span>、熟练掌握Android的基本类库、界面设计、网络通信、数据存储等技术，至少参与过1-2个移动APP项目。`,
        },
        {
          id: 8,
          title: "Java开发工程师",
          text1: `<span>1</span>、基于Android平台进行APP应用设计和开发；\n<span>2</span>、Android平台应用软件的产品开发、维护、BUG修改和完善；\n<span>3</span>、根据产品需求完成需求分析、模块设计、编码、等工作；`,
          text2: `<span>1</span>、本科自学计算机Java语言，Java基础扎实；\n<span>2</span>、熟悉SpringMVC，Mybatis，Springboot等框架；\n<span>3</span>、熟悉MySQL数据库，了解SQL优化；\n<span>4</span>、熟悉Redis非关系型数据库；\n<span>5</span>、熟悉Git版本控制以及Maven环境搭建使用；\n  - 了解Spring Cloud微服务架构；\n  - 了解linux操作系统以及常用指令；\n  - 了解前端HTML,CSS,JS以及Vue等框架。`,
        },
        {
          id: 9,
          title: "C开发工程师",
          text1: `<span>1</span>、负责公司阵列产品线的研发交付，主要开发任务包括，阵列音箱方案、对话系统及SDK的开发与维护工作；\n<span>2</span>、承担C/python/lua的开发工作；\n<span>3</span>、项目对接与阵列产品方案完善；`,
          text2: `<span>1</span>、全日制本科及以上学历，工作经验不限，可实习；\n2、熟悉linux平台下C编程，熟悉python、lua等优先考虑；\n<span>3</span>、有过大型C工程的开发或调试经验者优先；\n<span>4</span>、具备快速学习和独立解决问题的能力，有较强的责任心和抗压能力。`,
        },
        {
          id: 10,
          title: "售前技术支持工程师",
          text1: `<span>1</span>、负责智能穿戴和智慧屏项目的项目管理及日常相关工作；\n<span>2</span>、在每个迭代开始时，制订研发的迭代任务计划，明确任务的负责人，与产品、研发、测试高效沟通，保证产品需求的高质量按时完成；\n<span>3</span>、支持大客户项目的定制化开发，及时处理客户反馈的各种问题；\n<span>4</span>、解决研发团队在需求开发中遇到的各种问题、障碍，协调公司内部与外部资源，保证团队的正常研发工作，满足项目需求；\n<span>5</span>、对项目进行监控，对潜在的项目风险进行预测和报警，并制定调整计划和应对策略，及时同步项目进度状态；`,
          text2: `<span>1</span>、本科以上学历，计算机、电子工程等相关专业毕业；\n<span>2</span>、熟悉linux系统，熟悉C语言或者python语言；\n<span>3</span>、关注AI语音产品，对智能语音技术、语音产品有浓厚的兴趣；\n<span>4</span>、思维清晰敏捷，逻辑分析能力强，具有良好的文撰写、阅读、表达能力；\n<span>5</span>、有良好的沟通能力、抗压能力和团队协作能力。`,
        },
        {
          id: 11,
          title: "软件测试工程师",
          text1: `<span>1</span>、根据测试用例进行用例执行，提交bug并进行bug跟踪；\n<span>2</span>、有较强的逻辑分析能力和学习能力；\n<span>3</span>、协助搭建可靠、适用的测试环境，准备所需的测试数据；\n<span>4</span>、配合软硬件研发团队推进项目进展；`,
          text2: `<span>1</span>、大专及以上学历，22届学生优先；\n<span>2</span>、熟悉软件测试流程和测试方法；\n<span>3</span>、热爱测试，有良好的逻辑思维能力、沟通能力，有责任感和团队意识。`,
        },
        {
          id: 12,
          title: "语音信号算法研究员",
          text1: `<span>1</span>、硕士学历，电子信息相关专业，数字信号处理方向，声学或者语音信号处理尤佳；\n<span>2</span>、熟悉传统信号处理理论和经典算法，具有噪声抑制/回声消除/语音分离/声源，定位其中一个方面的学术研究经历或者工程研发经历；\n<span>3</span>、对深度学习模型及其在语音信号处理中的应用技术有一定了解；\n<span>4</span>、至少精通1门编程语言，python/matlab/c，熟悉shell编程加分；`,
          text2: `<span>1</span>、语音信号处理算法原型的实现和验证；\n<span>2</span>、根据实际应用需求，对现有算法进行优化；\n<span>3</span>、负责语音信号处理算法前沿研究的跟踪；\n<span>4</span>、与其他同事配合，确保算法的上线运行。`,
        },
        {
          id: 13,
          title: "语音识别算法研究员",
          text1: `<span>1</span>、负责语音识别声学模型，语言模型训练；\n<span>2</span>、跟踪、实验业界最新研究成果；`,
          text2: `<span>1</span>、具备独立思考，探索的能力，对未知领域有极大的热情与钻研精神；\n<span>2</span>、在模式识别、机器学习或者自然语言处理领域有丰富经验；\n<span>3</span>、有声学建模方面实践经验，掌握HTK工具或者kaldi工具；\n<span>4</span>、熟练使用过一种深度学习工具（CNTK，Caffe，Torch等），并且构建过基于深度学习模型的声学模型。`,
        },
        {
          id: 14,
          title: "销售助理",
          text1: `<span>1</span>、负责智慧终端的语音技术解决方案销售助理工作，关注智能硬件和人工智能行业，收集市场信息及业务相关的数据并作出分析，供公司决策；\n<span>2</span>、熟悉电话销售流程和技巧，具备较强的沟通能力和亲和力；\n<span>3</span>、以电话方式进行客户开发和客户信息收集，并协助外销电话约访客户；\n<span>4</span>、善于收集市场信息和行业展会信息，负责信息入档和整理归纳；\n<span>5</span>、深入理解公司产品，制定拓展计划，收集并建立合作伙伴资源，拓展、加深合作伙伴关系，或以上学历，三年及以上销售经验者优先；`,
          text2: `<span>1</span>、理工科专业毕业，有人工智能行业背景相关经验者优先；\n<span>2</span>、责任心强，细致认真，兼备独立工作能力和团队合作精神；\n<span>3</span>、有良好的沟通能力、抗压能力和团队协作能力。`,
        },
      ],
      ContactusList: [
        {
          img: require("assets/img/contact/contactus/contact.png"),
          title: "合作咨询",
          img1: require("assets/img/contact/contactus/email.png"),
          img2: require("assets/img/contact/contactus/email.png"),
          text: "marketing@qdreamer.com",
          text2: "li.zhang@qdreamer.com",
        },
        {
          img: require("assets/img/contact/contactus/join.png"),
          title: "加入我们",
          img1: require("assets/img/contact/contactus/email.png"),
          img2: require("assets/img/contact/contactus/phone.png"),
          text: "HR@qdreamer.com",
          text2: "0512-65478407",
        },
      ],
    };
  },
  components: {
    InviteDialog,
  },
  computed: {
    tableList() {
      return this.number === 1 ? this.socialData : this.schoolData;
    },
  },
  methods: {
    infoWindowClose() {
      this.mapshow = false;
    },
    infoWindowOpen() {
      this.mapshow = true;
    },
    openRowDetail(row) {
      const data = this.wordList.find((item) => item.id === row.key);
      this.$refs.invite.showTip(data);
    },
    change(i) {
      this.index = i;
    },
    show(index) {
      this.number = index;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    headerStyle({ row, rowIndex }) {
      return "font-size: 26px;font-weight: 400;color: #333333;text-align :center;width: 1200px;height: 60px; background: rgba(220, 220, 220, 0.7);";
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      return "height: 60px;font-size: 22px;font-weight: 400;color: #666666;text-align: center;cursor: pointer;";
    },
  },
  created() {
    this.infoWindowOpen();
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
// @import url();
.contact {
  .contact-header {
    height: 540px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(~assets/img/contact/header/background.png);
    text-align: center;
    font-size: 72px;
    font-weight: 500;
    color: #00ffff;
    text-shadow: 5px 8px 5px rgba(51, 51, 51, 0.24);
    overflow: hidden;
    margin-bottom: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      position: absolute;
      animation: rotate 5s linear infinite;
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
    .img1 {
      width: 157px;
      top: 1px;
      left: 1px;
    }
    .img2 {
      width: 154px;
      bottom: -15px;
      left: 0;
    }
    .img3 {
      width: 63px;
      top: 75px;
      left: 14.69%;
    }
    .img4 {
      width: 58px;
      bottom: 5px;
      left: 15%;
    }
    .img5 {
      width: 105px;
      bottom: -25px;
      right: 38.125%;
    }
    .img6 {
      width: 112px;
      bottom: 151px;
      right: 11.25%;
    }
    .img7 {
      width: 272px;
      bottom: -70px;
      right: 0;
    }
  }
  .contact-container {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: 50px;
    .employment {
      .header {
        height: 50px;
        position: relative;
        font-size: 36px;
        font-weight: 400;
        color: #333333;
        text-align: center;
        margin-bottom: 38px;
        .social {
          border-radius: 35px;
          position: absolute;
          left: 375px;
          cursor: pointer;
        }
        .school {
          position: absolute;
          right: 375px;
          cursor: pointer;
        }
        .appear {
          color: #0077f7;
        }
      }
    }
    >>> .cell {
      overflow: visible;
    }
    >>> .el-table__header {
      width: 1198px !important;
    }
  }
  .contactus {
    background: rgba(220, 220, 220, 0.25);
    overflow: hidden;
    margin-bottom: 50px;
    .contactus-header {
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
    .contactus-container {
      width: 700px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
      .box {
        width: 300px;
        height: 284px;
        background: #ffffff;
        box-shadow: 4px 6px 20px 1px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:last-child {
          .box-father {
            .box2 {
              .img2 {
                height: 19px;
              }
            }
          }
        }
        img {
          width: 100px;
          height: 100px;
          margin-bottom: 2px;
        }
        .title {
          font-size: 24px;
          font-weight: 400;
          color: #333333;
          line-height: 24px;
          margin-bottom: 25px;
        }
        .border {
          width: 26px;
          height: 5px;
          background-color: #cacaca;
          border-radius: 5px;
          margin-bottom: 22px;
        }
        .box-father {
          .box1 {
            display: flex;
            align-items: center;
            margin-bottom: 17px;
            .img1 {
              width: 16px;
              height: 15px;
              margin-right: 9px;
            }
            .img2 {
              width: 16px;
              height: 19px;
              margin-right: 9px;
            }
            .text {
              font-size: 18px;
            }
          }
          .box2 {
            display: flex;
            align-items: center;
            .img1 {
              width: 16px;
              height: 15px;
              margin-right: 9px;
            }
            .img2 {
              width: 16px;
              height: 15px;
              &:last-child {
                height: 19px;
              }
              margin-right: 10px;
            }
            .text2 {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  .contact-address {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .address-header {
      width: 700px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 35px;
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
    .address-area {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      img {
        width: 26px;
        height: 26px;
        margin-right: 13px;
      }
      span {
        font-size: 24px;
        font-weight: 400;
        color: #333333;
      }
    }
    .bm-view {
      width: 1200px;
      height: 408px;
      margin-bottom: $bottom-padding;
      @media screen and (max-width: 767px) {
        width: 100%;
        height: 200px;
      }
      .info {
        width: 300px;
      }
    }
  }
}
</style>