<template>
  <div class="mitax">
    <div class="mitax-head">
      <h3>爱税筹<em>I-TAX</em></h3>
      <h4>给您一个爱税筹的理由<em>FREE YOUR TAX</em></h4>
    </div>
    <div class="mitax-panel">
      <div class="mitax-introduce">
        <h1>爱税筹简介</h1>
        <div>
          <p>爱税筹为明动咨询旗下专业的财税筹划品牌。明动咨询，成立于2013年10月18日,专注于自贸试验区、类金融行业、TMT行业（电信、媒体和科技）及其他新兴行业的企业服务。</p>
          <p>我们的使命是“研究并提供企业需要的服务，帮助企业实现更大的经济效益”</p>
        </div>
      </div>
      <div class="mitax-room">
        <h1>产品介绍</h1>
      </div>
      <div class="mitax-product">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="plan-A plan-slide">
                <h2>爱税筹 A</h2>
                <div class="plan-title">年度开票金额36万以下</div>
                <div class="plan-serve">
                  <h3>付费形式：</h3>
                  <div>
                    <span>1. 后付费</span>
                    <span>2. 押金+服务费</span>
                    <span>3. 押金：3600</span>
                  </div>
                </div>
                <div class="plan-serve">
                  <h3>服务项目：</h3>
                  <div>
                    <span>开立爱税筹站点</span>
                    <span>提供每年的代理记账服务</span>
                    <span>开票服务</span>
                    <span>年度企业公示和汇算清缴</span>
                    <span>注销业务</span>
                  </div>
                </div>
                <div class="plan-btn">
                  <span>服务费率3%</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="plan-B plan-slide">
                <h2>爱税筹 B</h2>
                <div class="plan-title">年度开票金额500万以下</div>
                <div class="plan-serve">
                  <h3>付费形式：</h3>
                  <div>
                    <span>1. 后付费</span>
                    <span>2. 押金+服务费</span>
                    <span>3. 押金：8000</span>
                  </div>
                </div>
                <div class="plan-serve">
                  <h3>服务项目：</h3>
                  <div>
                    <span>开立爱税筹站点</span>
                    <span>提供每年的代理记账服务</span>
                    <span>开票服务</span>
                    <span>年度企业公示和汇算清缴</span>
                    <span>代缴税款（可选）</span>
                    <span>注销业务</span>
                  </div>
                </div>
                <div class="plan-btn">
                  <span>综合税率6.5%</span>
                  <span>服务税率1%</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="plan-C plan-slide">
                <h2>爱税筹 C</h2>
                <div class="plan-title">年度开票金额没有上线</div>
                <div class="plan-serve">
                  <h3>付费形式：</h3>
                  <div>
                    <span>1. 后付费</span>
                    <span>2. 押金+服务费</span>
                    <span>3. 押金：24000</span>
                  </div>
                </div>
                <div class="plan-serve">
                  <h3>服务项目：</h3>
                  <div>
                    <span>开立爱税筹站点</span>
                    <span>提供每年的代理记账服务</span>
                    <span>开票服务</span>
                    <span>年度企业公示和汇算清缴</span>
                    <span>代缴税款（可选）</span>
                    <span>注销业务</span>
                  </div>
                </div>
                <div class="plan-btn">
                  <span>综合税率9.5%</span>
                  <span>服务税率1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mitax-serve">
        <div class="mitax-process">
          <h1>服务流程</h1>
        </div>
        <div class="mitax-service">
          <template v-for="(item, index) in serveData">
            <div :key="index">
              <span>{{ item.label }}</span>
              <span>{{ item.article }}</span>
            </div>
          </template>
        </div>
      </div>
      <div class="mitax-maps">
        <div class="mitax-process">
          <h1>税源地</h1>
        </div>
        <div class="mitax-china">
          <div>
            <div>
              <em style="background: rgb(177, 0, 6)"></em>
              <span>华东</span>
            </div>
            <div>
              <em style="background: rgb(254, 212, 135);"></em>
              <span>华中</span>
            </div>
            <div>
              <em style="background: rgb(249, 174, 133);"></em>
              <span>华南</span>
            </div>
            <div>
              <em style="background: rgb(177, 0, 6);"></em>
              <span>西南</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper.less';
import Swiper from 'swiper/swiper-bundle.js';
export default {
  name: 'Mitax',
  data() {
    return {
      serveData: [
        {
          label: "1、",
          article: "专属方案制定（方案制定1-2个工作日完成）"
        },
        {
          label: "2、",
          article: "合同签订"
        },
        {
          label: "3、",
          article: "资料对接（资料收集2-3个工作日完成）"
        },
        {
          label: "4、",
          article: "开立爱税筹站点"
        },
        {
          label: "5、",
          article: "爱税筹业务服务（爱税筹业务服务按需求反馈来）"
        },
        {
          label: "6、",
          article: "爱税筹业务处理（爱税筹业务处理2-3个工作日完成）"
        },
        {
          label: "7、",
          article: "完税、结算（完税、结算、付款、付款2-3个工作日完成）"
        }
      ]
    }
  },
  mounted() {
    new Swiper('.mitax-product .swiper-container', {
      effect: 'coverflow',
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
    });
  }
}
</script>

<style lang="less" scoped>
.mitax {
  background-color: #ffffff;
  .mitax-head {
    padding: 0 0.28rem;
    width: 7.5rem;
    height: 1.32rem;
    background-color: #b10006;
    > h3 {
      padding: 0.2rem 0 0.1rem 0;
      font-size: 0.34rem;
      color: #ffffff;
      > em {
        padding: 0.2rem 0 0.1rem 0.18rem;
        font-size: 0.24rem;
        color: #ffffff;
      }
    }
    > h4 {
      margin: 0 0 0 0.6rem;
      font-size: 0.3rem;
      color: #ffffff;
      font-weight: normal;
      > em {
        padding: 0 0 0 0.14rem;
        font-size: 0.24rem;
        color: #ffffff;
      }
    }
  }
  .mitax-panel {
    border-top: 0.24rem solid #eeeeee;
    background-color: #ffffff;
    .mitax-introduce {
      > h1 {
        position: relative;
        margin: 0 auto;
        padding: 0.28rem 0;
        width: 6.9rem;
        font-size: 0.34rem;
        color: #212121;
        line-height: 0.34rem;
        font-weight: normal;
        &::after {
          position: absolute;
          content: "";
          left: 0;
          bottom: 0;
          width: 6.9rem;
          height: 1px;
          background-color: #eeeeee;
        }
      }
      > div {
        position: relative;
        margin: 0.24rem auto 0 auto;
        padding: 0 0 0.28rem 0;
        width: 6.9rem;
        &::after {
          position: absolute;
          content: "";
          left: 0;
          bottom: 0;
          width: 6.9rem;
          height: 1px;
          background-color: #eeeeee;
        }
        p {
          font-size: 0.3rem;
          color: #212121;
          line-height: 0.44rem;
          text-indent: 2em;
          &:last-child {
            margin: 0.12rem 0 0 0;
          }
        }
      }
    }
    .mitax-room {
      border-top: 0.08rem solid #eeeeee;
      > h1 {
        position: relative;
        margin: 0 auto;
        padding: 0.28rem 0;
        width: 6.9rem;
        font-size: 0.34rem;
        color: #212121;
        line-height: 0.34rem;
        font-weight: normal;
        &::after {
          position: absolute;
          content: "";
          left: 0;
          bottom: 0;
          width: 6.9rem;
          height: 1px;
          background-color: #eeeeee;
        }
      }
    }
    .mitax-product {
      .swiper-container {
        padding: 0.3rem 0;
        width: 100%;
        .swiper-wrapper {
          .swiper-slide {
            width: 5.4rem !important;
            box-shadow: 0 0 18px #00000033;
            .plan-A {
              > h2 {
                background-color: #fbb03b;
              }
            }
            .plan-B {
              > h2 {
                background-color: #c1272d;
              }
            }
            .plan-C {
              > h2 {
                background-color: #8cc63f;
              }
            }
            .plan-slide {
              border-radius: 3px;
              overflow: hidden;
              > h2 {
                padding: 0.18rem 0.3rem;
                font-size: 0.32rem;
                color: #ffffff;
                line-height: 0.32rem;
                font-weight: normal;
              }
              .plan-title {
                margin: 0.24rem 0 0 0.28rem;
                font-size: 0.32rem;
                color: #212121;
              }
              .plan-serve {
                > h3 {
                  margin: 0.2rem 0 0 0.28rem;
                  font-size: 0.32rem;
                  color: #212121;
                  font-weight: normal;
                }
                > div {
                  display: flex;
                  flex-direction: column;
                  margin: 0.12rem 0 0 0.54rem;
                  > span {
                    margin: 0.08rem 0 0 0;
                    font-size: 0.3rem;
                    color: #333333;
                  }
                }
              }
              .plan-btn {
                display: flex;
                flex-direction: row;
                margin: 0.22rem 0 0 0;
                width: 5.4rem;
                height: 0.8rem;
                border-top: 1px solid #eeeeee;
                > span {
                  flex: 1;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 0.8rem;
                  font-size: 0.3rem;
                  color: #333333;
                  line-height: 0.3rem;
                  border-right: 1px solid #eeeeee;
                }
              }
            }
          }
        }
      }
    }
    .mitax-serve {
      border-top: 0.08rem solid #eeeeee;
      .mitax-process {
        > h1 {
          position: relative;
          margin: 0 auto;
          padding: 0.28rem 0;
          width: 6.9rem;
          font-size: 0.34rem;
          color: #212121;
          line-height: 0.34rem;
          font-weight: normal;
          &::after {
            position: absolute;
            content: "";
            left: 0;
            bottom: 0;
            width: 6.9rem;
            height: 1px;
            background-color: #eeeeee;
          }
        }
      }
      .mitax-service {
        margin: 0.28rem auto 0 auto;
        padding: 0 0 0.3rem 0;
        width: 6.9rem;
        > div {
          display: flex;
          flex-direction: row;
          margin: 0.08rem 0 0 0;
          > span {
            font-size: 0.3rem;
            color: #212121;
            &:first-child {
              flex: 1;
            }
            &:last-child {
              flex: 11;
            }
          }
        }
      }
    }
    .mitax-maps {
      border-top: 0.08rem solid #eeeeee;
      .mitax-process {
        > h1 {
          position: relative;
          margin: 0 auto;
          padding: 0.28rem 0;
          width: 6.9rem;
          font-size: 0.34rem;
          color: #212121;
          line-height: 0.34rem;
          font-weight: normal;
          &::after {
            position: absolute;
            content: "";
            left: 0;
            bottom: 0;
            width: 6.9rem;
            height: 1px;
            background-color: #eeeeee;
          }
        }
      }
      .mitax-china {
        display: flex;
        align-items: flex-end;
        margin: 0 auto;
        width: 6.9rem;
        height: 6rem;
        background: url("./../assets/image/map.png") no-repeat;
        background-position: center center;
        background-size: 6.5rem 5.53rem;
        > div {
          margin: 0 0 0.22rem 0;
          > div {
            display: flex;
            flex-direction: row;
            margin: 0.08rem 0 0 0;
            > em {
              width: 0.38rem;
              height: 0.22rem;
            }
            > span {
              margin: 0 0 0 0.18rem;
              font-size: 0.28rem;
              color: #212121;
              line-height: 0.28rem;
            }
          }
        }
      }
    }
  }
}
</style>

