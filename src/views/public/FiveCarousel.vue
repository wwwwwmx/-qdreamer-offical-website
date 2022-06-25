<template>
  <div v-if="swiperShow" id="swiperBox">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide :key="index" v-for="(item, index) in Swiper">
        <img :class="item.imgClass" :src="item.img" alt="" />
        <span>{{ item.text }}</span>
      </swiper-slide>
    </swiper>
    <div slot="pagination" class="swiper-pagination" />
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css";
export default {
  data() {
    return {
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
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  props: {
    Swiper: {
      type: Array,
      default: [],
    },
  },
  methods: {},
  created() {
    this.swiperShow = false;
    this.$nextTick(() => {
      // 获取到图片之后再调用swiper进行复制，否则复制的都是空的
      this.swiperShow = true;
      const that = this;
    });
  },
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>

<style lang="scss" scoped>
#swiperBox {
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  transform: translateZ(0);
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
          width: 132px;
          height: 144px;
        }
        .img2 {
          width: 220px;
          height: 112px;
        }
        .img3 {
          width: 196px;
          height: 126px;
        }
        .img4 {
          width: 220px;
          height: 118px;
        }
        .img5 {
          width: 214px;
          height: 178px;
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
</style>