<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:13
 * @LastEditTime: 2022-03-12 16:28:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\NavTop.vue
-->
<template>
  <div class="header">
    <div class="content">
      <img @click="routerToPath('home-page',0)" class="img-logo" :src="imgLogo" alt />
      <div class="content-nav">
        <div
          @click="routerToPath('technology',1)"
          @mouseenter="isHover1Show = true"
          @mouseleave="isHover1Show = false"
          class="title1"
        >
          核心技术
          <img
            class="hover"
            src="~assets/img/public/hover.png"
            v-show="isHover1Show|| 1===navIndex"
            alt
          />
        </div>
        <div
          @mouseenter="
            isServiceShow = true;
            isHover2Show = true;
          "
          @mouseleave="
            isServiceShow = false;
            isHover2Show = false;
          "
          class="title2"
        >
          产品服务
          <img
            class="hover"
            src="~assets/img/public/hover.png"
            v-show="isHover2Show||2 === navIndex"
            alt
          />
        </div>
        <div
          v-show="isServiceShow"
          @mouseenter="
            isServiceShow = true;
            isHover2Show = true;
          "
          @mouseleave="
            isServiceShow = false;
            isHover2Show = false;
          "
          class="service"
        >
          <div
            @click="routerToPath(item.name,2,item.pageId)"
            :class="item.box"
            :key="index"
            :style="{color:((item.pageId===pageIndex)?'#0077f7':'#333')}"
            @mouseenter="item.isHover=true "
            @mouseleave="item.isHover=false"
            v-for="(item, index) in serviceList"
          >
            <img
              :class="item.imgClass"
              :src="(item.isHover||item.pageId===pageIndex)?item.hoverImg:item.img"
              alt
            />
            <span>{{ item.text }}</span>
          </div>
        </div>
        <div
          @mouseenter="
            isPlanShow = true;
            isHover3Show = true;
          "
          @mouseleave="
            isPlanShow = false;
            isHover3Show = false;
          "
          class="title3"
        >
          解决方案
          <img
            class="hover"
            src="~assets/img/public/hover.png"
            v-show="isHover3Show||3===navIndex"
            alt
          />
        </div>
        <div
          v-show="isPlanShow"
          @mouseenter="
            isPlanShow = true;
            isHover3Show = true;
          "
          @mouseleave="
            isPlanShow = false;
            isHover3Show = false;
          "
          class="plan"
        >
          <div
            @mouseenter="item.isHover=true "
            @mouseleave="item.isHover=false"
            @click="routerToPath(item.name,3,item.pageId)"
            :style="{color:((item.pageId===pageIndex)?'#0077f7':'#333')}"
            :class="item.box"
            :key="index"
            v-for="(item, index) in planList"
          >
            <img
              :class="item.imgClass"
              :src="(item.isHover||item.pageId===pageIndex)?item.hoverImg:item.img"
              alt
            />

            <span>{{ item.text }}</span>
          </div>
        </div>
        <div
          @mouseenter="
            isUsShow = true;
            isHover4Show = true;
          "
          @mouseleave="
            isUsShow = false;
            isHover4Show = false;
          "
          class="title4"
        >
          关于我们
          <img
            class="hover"
            src="~assets/img/public/hover.png"
            v-show="isHover4Show||4===navIndex"
            alt
          />
        </div>
        <div
          v-show="isUsShow"
          @mouseenter="
            isUsShow = true;
            isHover4Show = true;
          "
          @mouseleave="
            isUsShow = false;
            isHover4Show = false;
          "
          class="us"
        >
          <div
            @mouseenter="item.isHover=true "
            @mouseleave="item.isHover=false"
            @click="routerToPath(item.name,4,item.pageId)"
            :class="item.box"
            :key="index"
            :style="{color:((item.pageId===pageIndex)?'#0077f7':'#333')}"
            v-for="(item, index) in usList"
          >
            <img
              :class="item.imgClass"
              :src="(item.isHover||item.pageId===pageIndex)?item.hoverImg:item.img"
              alt
            />
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      imgLogo: require("assets/img/public/logo.png"),
      isServiceShow: false,
      isPlanShow: false,
      isUsShow: false,
      isHover1Show: false,
      isHover2Show: false,
      isHover3Show: false,
      isHover4Show: false,
      serviceList: [
        {
          name: "meeting",
          box: "box1",
          img: require("assets/img/public/navtop/meeting1.png"),
          imgClass: "img1",
          text: "智能会议",
          pageId: 1,
          // 此时是否显示hover时的（图片）
          isHover: false,
          hoverImg: require("assets/img/public/navtop/meeting2.png"),
        },
        {
          name: "wear",
          box: "box2",
          img: require("assets/img/public/navtop/wear1.png"),
          imgClass: "img2",
          text: "智能穿戴",
          pageId: 2,
          isHover: false,
          hoverImg: require("assets/img/public/navtop/wear2.png"),
        },
        {
          name: "terminal",
          box: "box3",
          img: require("assets/img/public/navtop/terminal1.png"),
          imgClass: "img3",
          text: "智能终端",
          pageId: 3,
          isHover: false,
          hoverImg: require("assets/img/public/navtop/terminal2.png"),
        },
        {
          name: "metabrain",
          box: "box4",
          img: require("assets/img/public/navtop/metabrain1.png"),
          imgClass: "img4",
          text: "MetaBrain",
          pageId: 4,
          isHover: false,
          hoverImg: require("assets/img/public/navtop/metabrain2.png"),
        },
      ],
      planList: [
        {
          name: "security",
          box: "box1",
          img: require("assets/img/public/navtop/security1.png"),
          imgClass: "img1",
          text: "智慧安防",
          pageId: 5,
          isHover: false,
          hoverImg: require("assets/img/public/navtop/security2.png"),
        },
        {
          name: "banking",
          box: "box2",
          img: require("assets/img/public/navtop/banking1.png"),
          imgClass: "img2",
          text: "智慧金融",
          pageId: 6,
          isHover: false,
          hoverImg: require("assets/img/public/navtop/banking2.png"),
        },
        {
          name: "warindustry",
          box: "box3",
          img: require("assets/img/public/navtop/warindustry1.png"),
          imgClass: "img3",
          text: "智慧军工",
          pageId: 7,
          isHover: false,
          hoverImg: require("assets/img/public/navtop/warindustry2.png"),
        },
        {
          name: "threeclass",
          box: "box4",
          img: require("assets/img/public/navtop/threeclass1.png"),
          imgClass: "img4",
          text: "三个课堂",
          pageId: 8,
          isHover: false,
          hoverImg: require("assets/img/public/navtop/threeclass2.png"),
        },
        {
          name: "english",
          box: "box5",
          img: require("assets/img/public/navtop/english1.png"),
          imgClass: "img5",
          text: "口语评测",
          pageId: 9,
          isHover: false,
          hoverImg: require("assets/img/public/navtop/english2.png"),
        },
        {
          name: "campussecurity",
          box: "box6",
          img: require("assets/img/public/navtop/campus1.png"),
          imgClass: "img6",
          text: "校园安防",
          pageId: 10,
          isHover: false,
          hoverImg: require("assets/img/public/navtop/campus2.png"),
        },
        {
          name: "classroom",
          box: "box7",
          img: require("assets/img/public/navtop/classroom1.png"),
          imgClass: "img7",
          text: "智慧教室",
          pageId: 11,
          isHover: false,
          hoverImg: require("assets/img/public/navtop/classroom2.png"),
        },
      ],
      usList: [
        {
          name: "introduce",
          box: "box1",
          img: require("assets/img/public/navtop/introduce1.png"),
          imgClass: "img1",
          text: "公司介绍",
          pageId: 12,
          isHover: false,
          hoverImg: require("assets/img/public/navtop/introduce2.png"),
        },
        {
          name: "contact",
          box: "box2",
          img: require("assets/img/public/navtop/contact1.png"),
          imgClass: "img2",
          text: "加入|联系我们",
          pageId: 13,
          isHover: false,
          hoverImg: require("assets/img/public/navtop/contact2.png"),
        },
      ],
    };
  },
  components: {},
  computed: {
    ...mapState(["navIndex", "pageIndex"]),
    showName() {
      return this.isShow ? "显示" : "隐藏";
    },
  },
  methods: {
    ...mapMutations(["changePlace"]),
    // handleShow() {
    //   this.isShow = !this.isShow;
    // },
    // 跳转到对应路由
    routerToPath(name, num, pageId) {
      this.$router.push({ name: name });
      this.changePlace({ navIndex: num, pageIndex: pageId });
    },
  },
  created() {},
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 2000;
  background-color: #fff;
  .content {
    width: $content-width;
    margin: 0 auto;
    height: 80px;
    display: flex;
    align-items: center;
    .img-logo {
      width: 155px;
      height: 49px;
      cursor: pointer;
    }
    .content-nav {
      width: 777px;
      display: flex;
      justify-content: space-between;
      color: #333;
      margin-left: 190px;
      position: relative;
      .title1,
      .title2,
      .title3,
      .title4 {
        font-size: 20px;
        font-weight: 400;
        color: #333333;
        line-height: 80px;
        position: relative;
        cursor: pointer;
        .hover {
          position: absolute;
          width: 28px;
          height: 22px;
          left: 50%;
          transform: translateX(-50%);
          bottom: 4px;
        }
      }
      .service {
        width: 150px;
        padding: 20px 0 20px 16px;
        background: #ffffff;
        box-shadow: 0px 0px 9px 0px rgba(51, 51, 51, 0.28);
        border-radius: 0px 2px 2px 2px;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 198px;
        .box1,
        .box2,
        .box3,
        .box4 {
          width: 107px;
          display: flex;
          align-items: center;
          letter-spacing: 1px;
          cursor: pointer;
          &:hover {
            span {
              color: #0077f7;
            }
          }
          .img1 {
            width: 20px;
            margin-right: 11px;
          }
          .img2 {
            width: 12px;
            margin-left: 2px;
            margin-right: 15px;
          }
          .img3 {
            width: 16px;
            margin-left: 2px;
            margin-right: 13px;
          }
          .img4 {
            width: 16px;
            margin-left: 2px;
            margin-right: 12px;
          }
          span {
            font-size: 18px;
            font-weight: 400;
          }
        }
        .box1,
        .box2,
        .box3 {
          margin-bottom: 20px;
        }
        .box2 {
          margin-left: 2px;
        }
      }
      .plan {
        width: 150px;
        padding: 20px 0 20px 24px;
        background: #ffffff;
        box-shadow: 0px 0px 9px 0px rgba(51, 51, 51, 0.28);
        border-radius: 0px 2px 2px 2px;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 430px;
        .box1,
        .box2,
        .box3,
        .box4,
        .box5,
        .box6,
        .box7 {
          width: 105px;
          display: flex;
          align-items: center;
          display: flex;
          align-items: center;
          letter-spacing: 1px;
          cursor: pointer;
          &:hover {
            span {
              color: #0077f7;
            }
          }
          .img1 {
            width: 16px;
            margin-right: 13px;
          }
          .img2 {
            width: 18px;
            margin-right: 11px;
          }
          .img3 {
            width: 18px;
            margin-right: 11px;
          }
          .img4 {
            width: 16px;
            margin-right: 12px;
          }
          .img5 {
            width: 11px;
            margin-right: 13px;
          }
          .img6 {
            width: 13px;
            margin-right: 13px;
          }
          .img7 {
            width: 16px;
            margin-right: 13px;
          }
          span {
            font-size: 18px;
            font-weight: 400;
          }
        }
        .box1,
        .box2,
        .box3,
        .box4,
        .box5,
        .box6 {
          margin-bottom: 20px;
        }
        .box5 {
          margin-left: 3px;
        }
        .box6 {
          margin-left: 2px;
        }
      }
      .us {
        width: 175px;
        padding: 20px 0 20px 14px;
        background: #ffffff;
        box-shadow: 0px 0px 9px 0px rgba(51, 51, 51, 0.28);
        border-radius: 0px 2px 2px 2px;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 660px;
        .box1,
        .box2 {
          display: flex;
          align-items: center;
          display: flex;
          align-items: center;
          letter-spacing: 1px;
          cursor: pointer;
          &:hover {
            span {
              color: #0077f7;
            }
          }
          .img1 {
            width: 18px;
            margin-right: 12px;
          }
          .img2 {
            width: 20px;
            margin-right: 10px;
          }
          span {
            font-size: 18px;
            font-weight: 400;
          }
        }
        .box1 {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>