<template>
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
        <el-carousel-item v-for="(item, index) in contentList" :key="index">
          <img :src="item.img" />
          <div class="content">
            <div class="title">{{ item.title }}</div>
            <div class="text-father">
              <div class="text">{{ item.text }}</div>
            </div>
          </div>
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
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    contentList: {
      type: Array,
      default: [],
    },
  },
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
  mounted() {},
};
</script>

<style lang="scss" scoped>
.carousel {
  margin-top: -5px;
  position: relative;
  .leftArrow {
    position: absolute;
    left: -44px;
    top: 40%;
    cursor: pointer;
    img {
      width: 24px;
      height: 40px;
    }
  }
  .rightArrow {
    position: absolute;
    right: -44px;
    top: 40%;
    cursor: pointer;
    img {
      width: 24px;
      height: 40px;
    }
  }
  .carousel {
    width: 1050px;
    margin: 0 auto;
    >>> .el-carousel__indicator--horizontal .el-carousel__button {
      width: 46px;
      height: 5px;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(~assets/img/terminal/solution/space.png);
    }
    >>> .el-carousel__indicator--horizontal.is-active .el-carousel__button {
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(~assets/img/terminal/solution/click.png);
    }
    >>> .el-carousel__container {
      height: 377px;
      .el-carousel__item {
        display: flex;
        align-items: center;
      }
      img {
        width: 361px;
        height: 361px;
      }
      .content {
        width: 690px;
        height: 250px;
        background: #ffffff;
        border-radius: 2px;
        margin-left: -29px;
        box-shadow: 0px 0px 25px 4px rgba(51, 51, 51, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title {
          font-size: 36px;
          font-weight: bold;
          color: #333333;
          line-height: 36px;
          margin-bottom: 15px;
        }
        .text-father {
          text-align: center;
          padding: 0 37px;
          .text {
            display: inline-block;
            font-size: 24px;
            color: #333333;
            line-height: 36px;
            text-align: left;
          }
        }
      }
    }
    >>> .el-carousel__indicators {
      margin-top: -21px;
    }
  }
}
</style>