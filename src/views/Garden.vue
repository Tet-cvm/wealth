<template>
  <div class="garden">
    <div class="garden-flow">
      <div>
        <span>您是否反反复复跑工商？税务等部门？</span>
        <span>最后时间浪费了，事还没办成！</span>
        <span>事办成了，付出的时间、成本却大大增加！</span>
      </div>
    </div>
    <div class="garden-virtue">
      <div>
        <span>1.官方合作，园区直招</span>
        <span>2.可高达40%财政支持</span>
        <span>3.合法享受政策优惠。</span>
        <span>4.合法降低运营成本。</span>
        <span>5.显著提高营业利润。</span>
      </div>
    </div>
    <div class="garden-count">
      <img src="~@/assets/image/garden.jpg" alt="" />
    </div>
    <div class="garden-count">
      <div class="garden-head">
        <h3>财政扶持预计</h3>
      </div>
      <div class="garden-form">
        <div class="garden-total">
          <h3>企业年纳税额(元):</h3>
          <input type="number" v-model="taxCount" placeholder="请输入企业年纳税额">
        </div>
        <div class="garden-calculate">
          <div class="calculate-head">
            <span>财政扶持园区</span>
            <span>预计年财政扶持(元)</span>
          </div>
          <div class="calculate-panel">
            <div>
              <span>奉贤区</span>
              <span>{{ taxOutput.fx }}</span>
            </div>
            <div>
              <span>浦东新区</span>
              <span>{{ taxOutput.pd }}</span>
            </div>
            <div>
              <span>崇明区</span>
              <span>{{ taxOutput.cm }}</span>
            </div>
            <div>
              <span>杨浦区</span>
              <span>{{ taxOutput.yp }}</span>
            </div>
          </div>
        </div>
        <div class="garden-btn" :style="'opacity:' + btnPush" @click="onCount">
          <span>点击计算</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadedBox, toastBox } from "@/assets/js/appUtils.js"
export default {
  name: 'Garden',
  data() {
    return {
      taxCount: null,
      taxOutput: {
        fx: "您的年纳税额过少",
        pd: "您的年纳税额过少",
        cm: "您的年纳税额过少",
        yp: "您的年纳税额过少",
      },
      btnPush: 1,
      btnStatus: true
    }
  },
  methods: {
    onCount() {
      let that = this;
      if (that.btnStatus && that.taxCount) {
        that.btnStatus = false;
        that.btnPush = 0.48;
        loadedBox(true, "计算中..");
          setTimeout(() => {
          if (that.taxCount >= 100000) {
            that.taxOutput.fx = "¥ " + (that.taxCount * 0.3 * 0.3).toFixed(2);
            that.taxOutput.pd = "¥ " + (that.taxCount * 0.3 * 0.3).toFixed(2);
            that.taxOutput.cm = "¥ " + (that.taxCount * 0.5 * 0.4).toFixed(2);
            that.taxOutput.yp = "¥ " + (that.taxCount * 0.325 * 0.4).toFixed(2);
          } else {
            for (let i in that.taxOutput) {
              that.taxOutput[i] = "您的年纳税额过少";
            }
          }
          loadedBox(false);
          that.btnPush = 1;
          that.btnStatus = true;
        }, 1800);
      } else {
        toastBox("请输入企业年纳税额");
      }
    }
  }
}
</script>

<style lang="less" scoped>
.garden {
  background-color: #ffffff;
  .garden-flow {
    width: 7.5rem;
    height: 6rem;
    background: url("~@/assets/image/person.jpg") no-repeat;
    background-size: 100% 100%;
    background-position: top center;
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 7.5rem;
      height: 5.3rem;
      background: rgba(0, 0, 0, 0.28);
      > span {
        position: relative;
        display: inline-block;
        padding: 0.08rem 0.04rem 0.08rem 0.12rem;
        font-size: 0.24rem;
        color: #212121;
        background-color: #ffffff;
        &:nth-child(1) {
          margin: 1.2rem 0.4rem 0 0;
          width: 2.7rem;
          border-radius: 0.08rem;
        }
        &:nth-child(2) {
          margin: 0.2rem 0.6rem 0 0;
          width: 2.5rem;
          border-radius: 0.12rem;
        }
        &:nth-child(3) {
          margin: 0.2rem 0.3rem 0 0;
          width: 2.8rem;
          border-radius: 0.12rem;
        }
        &::after {
          position: absolute;
          content: "";
          top: 0.18rem;
          left: -0.09rem;
          width: 0;
          height: 0;
          border-right: 0.12rem solid #ffffff;
          border-top: 0.22rem solid transparent;
          border-bottom: 0.22rem solid transparent;
        }
      }
    }
  }
  .garden-virtue {
    width: 7.5rem;
    height: 4.34rem;
    background-color: #de2128;
    overflow: hidden;
    > div {
      display: flex;
      flex-direction: column;
      margin: 0.12rem auto 0 auto;
      width: 3.5rem;
      > span {
        position: relative;
        display: block;
        margin: 0.18rem 0 0 0;
        padding: 0.08rem 0.04rem 0.08rem 0.22rem;
        width: 3.5rem;
        font-size: 0.3rem;
        color: #212121;
        background-color: #ffffff;
        border-radius: 0.08rem;
        &::after {
          position: absolute;
          content: "";
          top: 0.08rem;
          left: -0.09rem;
          width: 0;
          height: 0;
          border-right: 0.12rem solid #ffffff;
          border-top: 0.22rem solid transparent;
          border-bottom: 0.22rem solid transparent;
        }
      }
    }
  }
  .garden-count {
    > img {
      width: 7.5rem;
      height: 7.33rem;
    }
  }
  .garden-count {
    .garden-head {
      > h3 {
        margin: 0 0 0 0.39rem;
        font-size: 0.4rem;
        color: #333333;
        line-height: 0.4rem;
        font-weight: bolder;
      }
    }
    .garden-form {
      margin: 0.32rem 0 0 0;
      .garden-total {
        margin: 0.34rem auto 0 auto;
        width: 6.7rem;
        > h3 {
          font-size: 0.32rem;
          color: #212121;
          line-height: 0.32rem;
          font-weight: normal;
        }
        > input {
          margin: 0.28rem 0 0 0;
          width: 6.7rem;
          height: 0.68rem;
          font-size: 0.3rem;
          color: #212121;
          border: 0px;
          outline: none;
          -webkit-appearance: none;
          border-bottom: 1px solid #EEEEEE;
        }
        input:-moz-placeholder {
          font-size: 0.3rem;
          color: #666666;
        }
      }
      .garden-calculate {
        margin: 0.46rem auto 0 auto;
        width: 6.7rem;
        .calculate-head {
          display: flex;
          flex-direction: row;
          > span {
            font-size: 0.32rem;
            color: #212121;
            line-height: 0.32rem;
            font-weight: normal;
            &:nth-child(1) {
              flex: 2;
            }
            &:nth-child(2) {
              flex: 3;
            }
          }
        }
        .calculate-panel {
          > div {
            display: flex;
            flex-direction: row;
            margin: 0.34rem 0 0 0;
            > span {
              font-size: 0.3rem;
              color: #212121;
              line-height: 0.3rem;
              font-weight: normal;
              &:nth-child(1) {
                flex: 2;
              }
              &:nth-child(2) {
                flex: 3;
                color: #666666;
              }
            }
          }
        }
      }
      .garden-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.42rem auto 0 auto;
        width: 6.9rem;
        height: 0.8rem;
        background-color: #1aac19;
        border-radius: 0.1rem;
        > span {
          font-size: 0.3rem;
          color: #ffffff;
          line-height: 0.3rem;
        }
      }
    }
  }
}
</style>

