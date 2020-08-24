<template>
  <div class="dialog" v-show="data.status">
    <div class="dialog-panel">
      <h3>{{ data.title }}</h3>
      <div class="dialog-box">
        <div>
          <span>企业增值税：</span>
          <span>{{ data.add }}</span>
        </div>
        <div>
          <span>企业所得税：</span>
          <span>{{ data.get }}</span>
        </div>
      </div>
      <div class="dialog-btn" @click="onSure">确 定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    data: Object
  },
  methods: {
    onSure() {
      this.$emit("btn-dialog");
    }
  }
}
</script>

<style lang="less" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.28);
  z-index: 999;
  .dialog-panel {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5.4rem;
    border-radius: 0.12rem;
    background-color: #ffffff;
    transform: translate(-50%, -50%);
    > h3 {
      padding: 0.46rem 0 0.22rem 0;
      font-size: 0.34rem;
      color: #212121;
      line-height: 0.34rem;
      text-align: center;
    }
    .dialog-box {
      padding: 0 0.3rem 0.3rem 0.3rem;
      width: 5.4rem;
      min-height: 1.2rem;
      > div  {
        margin: 0.16rem 0 0 0;
        > span {
          font-size: 0.3rem;
          color: #212121;
          line-height: 0.3rem;
        }
      }
    }
    .dialog-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 0.8rem;
      font-size: 0.32rem;
      color: #212121;
      border-top: 1px solid #eeeeee;
    }
  }
}
</style>