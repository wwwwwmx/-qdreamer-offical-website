<template>
  <div class="invite-father">
    <el-dialog
      :title="popup.title"
      class="box"
      :visible.sync="isShow"
      width="630px"
      :close-on-click-modal="true"
      @closed="onClose"
      @close="beginClose"
      @open="getScrollHeight"
    >
      <div class="require-title">【岗位要求】</div>
      <div class="require-text">{{ popup.text1 }}</div>
      <div class="content-title">【岗位内容】</div>
      <div class="content-text">{{ popup.text2 }}</div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      popup: "",
      winY: null,
    };
  },
  methods: {
    onClose() {
      this.popup = "";
      this.winY = null;
    },
    getScrollHeight() {
      this.winY = window.scrollY;
      window.addEventListener("scroll", this.disableWindowScroll, false);
    },
    beginClose() {
      window.removeEventListener("scroll", this.disableWindowScroll, false);
    },
    disableWindowScroll() {
      window.scrollTo({ top: this.winY, behavior: "instant" });
    },
    // 打开弹窗
    showTip(data) {
      this.isShow = true;
      this.popup = data;
    },
    closeTip() {
      this.isShow = false;
    },
  },
  created() {
    window.scrollTo({ top: this.winY, behavior: "instant" });
  },
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>
<style lang="scss" scoped>
.invite-father {
  .box {
    font-size: 22px;
    font-weight: bold;
    color: #474747;
    text-align: center;
    .require-title {
      font-size: 18px;
      font-weight: 400;
      color: #333333;
      margin-bottom: 13px;
      text-align: left;
    }
    .require-text {
      margin-left:7px;
      font-size: 18px;
      font-family: Arial;
      font-weight: 400;
      color: #666666;
      margin-bottom: 30px;
      line-height: 30px;
      width: 600px;
      white-space: pre-wrap;
      text-align: left;
    }
    .content-title {
      font-size: 18px;
      font-weight: 400;
      color: #333333;
      margin-bottom: 13px;
      text-align: left;
    }
    .content-text {
      margin-left:7px;
      font-size: 18px;
      font-family: Arial;
      font-weight: 400;
      color: #666666;
      line-height: 30px;
      width: 600px;
      white-space: pre-wrap;
      text-align: left;
    }
  }
}
</style>