<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:26
 * @LastEditTime: 2022-01-17 20:16:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\Footer.vue
-->
<template>
  <div class="footer">
    <div class="footer-container">
      <div class="up">
        <img class="logo" src="~assets/img/public/logo.png" alt="" />
        <div class="content">
          <div class="area">
            <img src="~assets/img/public/area.png" alt="" />
            <span
              >公司地址：苏州工业园区若水路388号纳米技术国家大学科技园E栋1905</span
            >
          </div>
          <div class="contact">
            <img src="~assets/img/public/contact.png" alt="" />
            <span>联系电话：0512-65478407（周一到周五 9：00-18：00）</span>
          </div>
        </div>
      </div>
      <div class="border"></div>
      <span class="copyright"
        >Copyright © 2022
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
          >苏ICP备15039793号</a
        >
        苏州奇梦者科技有限公司 版权所有</span
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    routerToPath(name) {
      this.$router.push({ name: name });
    },
  },
  created() {},
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>
<style lang="scss" scoped>
.footer {
  height: 260px;
  background: #2e3033;
  .footer-container {
    width: 1274px;
    height: 260px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .up {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin-top: 30px;
      .logo {
        width: 133px;
        height: 43px;
      }
      .content {
        margin-top: 28px;
        .area {
          display: flex;
          align-items: center;
          margin-bottom: 17px;
          img {
            width: 17px;
            height: 20px;
          }
          span {
            font-size: 18px;
            font-weight: 400;
            color: #ffffff;
            line-height: 18px;
            opacity: 0.4;
            margin-left: 10px;
          }
        }
        .contact {
          display: flex;
          align-items: center;
          img {
            width: 21px;
            height: 21px;
          }
          span {
            font-size: 18px;
            font-weight: 400;
            color: #ffffff;
            line-height: 18px;
            opacity: 0.4;
            margin-left: 7px;
          }
        }
      }
    }
    .border {
      width: 1274px;
      height: 1px;
      background: #45484c;
      margin-bottom: -5px;
    }
    .copyright {
      font-size: 15px;
      font-weight: 400;
      color: #ffffff;
      opacity: 0.4;
      margin-bottom: 28px;
      a {
        text-decoration: underline;
        color: #ffffff;
      }
    }
  }
}
</style>