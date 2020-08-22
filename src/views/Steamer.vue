<template>
  <div class="steamer">
    <div class="steamer-banner"></div>
    <div class="steamer-map">
      <div class="map-title">
        <span></span>
        <h3>舟山自贸区南部片区</h3>
        <span></span>
      </div>
      <div class="map-panel">
        <img src="~@/assets/image/map.jpg" alt="" />
        <p>舟山岛南部片区：25.35平方公里，舟山岛南部片区由新城区块、小干岛区块、沈家门区块、东港区块、朱家尖区块和相关海域组成。<em>重点发展大宗商品交易、航空制造、零部件物流、研发设计及相关配套产业，建设舟山航空产业园，着力发展水产品贸易、海洋旅游、海水利用、现代商贸、金融服务、航运、信息咨询、高新技术等产业。</em></p>
      </div>
      <div class="map-picture">
        <template v-for="(item, index) in pictureData">
          <div class="map-list" :key="index">
            <img :src="item.image" alt="" />
          </div>
        </template>
      </div>
    </div>
    <div class="steamer-reason">
      <div class="reason-title">
        <span></span>
        <h3>选择我们的理由</h3>
        <span></span>
      </div>
      <img src="~@/assets/image/choose.jpg" alt="">
    </div>
    <div class="steamer-count">
      <div class="count-title">
        <span></span>
        <h3>财政扶持预计</h3>
        <span></span>
      </div>
      <h3>浙江舟山财政扶持测算表</h3>
      <div class="steamer-table">
        <div class="garden-total">
          <h3>企业年纳税额(元)</h3>
          <div>
            <label for="">企业增值税:</label>
            <input type="number" v-model="taxCountAdd" placeholder="请输入企业年纳税额">
          </div>
          <div>
            <label for="">企业所得税:</label>
            <input type="number" v-model="taxCountGet" placeholder="请输入企业年纳税额">
          </div>
        </div>
        <div class="garden-tips">注: 增值税、企业所得税地方(区级)年度留存部分不低于10万元.</div>
        <div class="garden-btn" :style="'opacity:' + btnPush" @click="onCount">
          <span>点击计算</span>
        </div>
      </div>
    </div>
    <div class="steamer-case">
      <div class="case-title">
        <span></span>
        <h3>案例展示</h3>
        <span></span>
      </div>
      <div class="case-swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <template v-for="(item, index) in bannerData">
              <div class="swiper-slide" :key="index">
                <img :src="item.image" alt="" />
              </div>
            </template>
          </div>
        </div>
        <div class="arrow-left" @click="onArrow(true)">
          <img src="~@/assets/image/arrow-l.png" alt="" />
        </div>
        <div class="arrow-right" @click="onArrow(false)">
          <img src="~@/assets/image/arrow-r.png" alt="" />
        </div>
      </div>
    </div>
    <div class="steamer-coop">
      <div class="coop-title">
        <span></span>
        <h3>合作客户</h3>
        <span></span>
      </div>
      <div class="coop-company">
        <img src="~@/assets/image/coop01.jpg" alt="" />
        <img src="~@/assets/image/coop02.jpg" alt="" />
        <img src="~@/assets/image/coop03.jpg" alt="" />
        <img src="~@/assets/image/coop04.jpg" alt="" />
        <img src="~@/assets/image/coop05.jpg" alt="" />
        <img src="~@/assets/image/coop06.jpg" alt="" />
        <img src="~@/assets/image/coop07.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper.less';
import Swiper from 'swiper/swiper-bundle.js';
import { loadedBox, toastBox } from "@/assets/js/appUtils.js"
export default {
  name: 'Steamer',
  data() {
    return {
      pictureData: [
        {
          image: require("./../assets/image/des01.jpg")
        },
        {
          image: require("./../assets/image/des02.jpg")
        },
        {
          image: require("./../assets/image/des03.jpg")
        },
        {
          image: require("./../assets/image/des04.jpg")
        },
        {
          image: require("./../assets/image/des05.jpg")
        },
        {
          image: require("./../assets/image/des06.jpg")
        }
      ],
      btnPush: 1,
      taxCountAdd: null,
      taxCountGet: null,
      btnStatus: true,
      addIncome: 0,
      getIncome: 0,
      bannerSwiper: Object,
      bannerIndex: 0,
      bannerData: [
        {
          image: require('./../assets/image/card01.jpg')
        },
        {
          image: require('./../assets/image/card02.jpg')
        },
        {
          image: require('./../assets/image/card03.jpg')
        }
      ]
    }
  },
  mounted() {
    let that = this;
    // 初始化模块
    that.bannerSwiper = new Swiper('.case-swiper .swiper-container', {
      mousewheel: true,
      loop : true,
      autoplay: true,
      on: {
        slideChangeTransitionStart: function() {
          that.bannerIndex = this.activeIndex;
        }
      }
    });
  },
  methods: {
    onCount() {
      let that = this;
      if (that.btnStatus && (that.taxCountAdd || that.taxCountGet)) {
        that.btnStatus = false;
        that.btnPush = 0.48;
        loadedBox(true, "计算中..");
        setTimeout(() => {
          let total = that.taxCountAdd * 0.43 + that.taxCountGet * 0.343;
          if (total >= 100000 && total < 3000000) {
            that.addIncome = (that.taxCountAdd * 0.43 * 0.7).toFixed(2);
            that.getIncome = (that.taxCountGet * 0.343 * 0.8).toFixed(2);
          } else if (total >=3000000 && total < 10000000) {
            that.addIncome = (that.taxCountAdd * 0.43 * 0.75).toFixed(2);
            that.getIncome = (that.taxCountGet * 0.343 * 0.8).toFixed(2);
          } else if (total > 10000000) {
            that.addIncome = (that.taxCountAdd * 0.43 * 0.8).toFixed(2);
            that.getIncome = (that.taxCountGet * 0.343 * 0.8).toFixed(2);
          } else {
            that.addIncome = "纳税额不足~";
            that.getIncome = "纳税额不足~";
          }
          loadedBox(false);
          that.btnPush = 1;
          that.btnStatus = true;
          console.log(that.addIncome, that.getIncome);
      }, 1800);
      } else {
        toastBox("请输入增值税或所得税");
      }
    },
    onArrow(type) {
      if (type) {
        this.bannerSwiper.slidePrev();
      } else {
        this.bannerSwiper.slideNext();
      }
    }
  }
}
</script>

<style lang="less" scoped>
.steamer {
  padding: 0 0 0.48rem 0;
  background-color: #ffffff;
  .steamer-banner {
    width: 7.5rem;
    height: 3.6rem;
    background-color: #EEEEEE;
  }
  .steamer-map {
    .map-title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0.04rem 0 0 0;
      width: 7.5rem;
      height: 1rem;
      > span {
        width: 1.4rem;
        height: 1px;
        background-color: #222222;
      }
      > h3 {
        padding: 0 0.3rem;
        font-size: 0.38rem;
        color: #de2128;
        line-height: 0.4rem;
      }
    }
    .map-panel {
      margin: 0 auto;
      width: 6.9rem;
      > img {
        width: 100%;
        height: auto;
      }
      > p {
        margin: 0.2rem 0 0 0;
        font-size: 0.3rem;
        color: #212121;
        line-height: 0.48rem;
        text-indent: 2em;
        > em {
          font-size: 0.3rem;
          color: #de2128;
          line-height: 0.48rem;
        }
      }
    }
    .map-picture {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 auto;
      width: 7.2rem;
      .map-list {
        margin: 0.22rem 0 0 0;
        width: 50%;
        > img {
          margin: 0 auto;
          width: 3.3rem;
          height: auto;
        }
      }
    }
  }
  .steamer-reason {
    margin: 0.34rem 0 0 0;
    .reason-title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0.04rem 0 0 0;
      width: 7.5rem;
      height: 1rem;
      > span {
        width: 1.8rem;
        height: 1px;
        background-color: #222222;
      }
      > h3 {
        padding: 0 0.3rem;
        font-size: 0.38rem;
        color: #de2128;
        line-height: 0.4rem;
      }
    }
    > img {
      margin: 0 auto;
      width: 6.5rem;
      height: 5.7rem;
    }
  }
  .steamer-count {
    margin: 0.34rem 0 0 0;
    .count-title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0.04rem 0 0 0;
      width: 7.5rem;
      height: 1rem;
      > span {
        width: 2rem;
        height: 1px;
        background-color: #222222;
      }
      > h3 {
        margin: 0.18rem 0 0 0;
        padding: 0 0.3rem;
        font-size: 0.38rem;
        color: #de2128;
        line-height: 0.4rem;
      }
    }
    > h3 {
      font-size: 0.34rem;
      color: #212121;
      font-weight: bolder;
      text-align: center;
    }
    .steamer-table {
      .garden-total {
        margin: 0.34rem auto 0 auto;
        width: 6.7rem;
        > h3 {
          font-size: 0.32rem;
          color: #212121;
          line-height: 0.32rem;
          font-weight: bolder;
        }
        > div {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0.24rem 0 0 0;
          > label {
            flex: 1;
            display: flex;
            align-items: center;
            width: 1.8rem;
            height: 0.68rem;
            font-size: 0.3rem;
            color: #212121;
            line-height: 0.3rem;
            font-weight: normal;
          }
          > input {
            flex: 3;
            margin: 0 0 0 0.12rem;
            width: 4.7rem;
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
      }
      .garden-tips {
        margin: 0.64rem auto 0 auto;
        width: 6.7rem;
        font-size: 0.24rem;
        color: #c00000;
        line-height: 0.24rem;
      }
      .garden-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.22rem auto 0 auto;
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
  .steamer-case {
    margin: 0.46rem 0 0 0;
    .case-title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0.04rem 0 0 0;
      width: 7.5rem;
      height: 1rem;
      > span {
        width: 2rem;
        height: 1px;
        background-color: #222222;
      }
      > h3 {
        margin: 0.18rem 0 0 0;
        padding: 0 0.3rem;
        font-size: 0.38rem;
        color: #de2128;
        line-height: 0.4rem;
      }
    }
    .case-swiper {
      position: relative;
      margin: 0.26rem 0 0 0;
      .swiper-container {
        position: relative;
        width: 3.59rem;
        height: 5.16rem;
        .swiper-wrapper {
          .swiper-slide {
            > img {
              width: 3.59rem;
              height: 5.16rem;
            }
          }
        }
      }
      .arrow-left {
        position: absolute;
        top: 2rem;
        left: 0.68rem;
        > img {
          width: 0.5rem;
          height: 0.86rem;
        }
      }
      .arrow-right {
        position: absolute;
        top: 2rem;
        right: 0.68rem;
        > img {
          width: 0.5rem;
          height: 0.86rem;
        }
      }
    }
  }
  .steamer-coop {
    .coop-title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0.04rem 0 0 0;
      width: 7.5rem;
      height: 1rem;
      > span {
        width: 2rem;
        height: 1px;
        background-color: #222222;
      }
      > h3 {
        margin: 0.18rem 0 0 0;
        padding: 0 0.3rem;
        font-size: 0.38rem;
        color: #de2128;
        line-height: 0.4rem;
      }
    }
    .coop-company {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 auto;
      width: 5.9rem;
      height: 3.02rem;
      > img {
        display: flex;
        width: 1.42rem;
        height: 1.41rem;
        &:last-child {
          width: 2.95rem;
          height: 1.41rem;
        }
      }
    }
  }
}
</style>

