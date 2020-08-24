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
        <h5>税收小课堂</h5>
      </div>
      <div class="mitax-product">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="plan-A">
                <h2>爱税筹 A</h2>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="plan-B">
                <h2>爱税筹 B</h2>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="plan-C">
                <h2>爱税筹 C</h2>
              </div>
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
  mounted() {
    new Swiper('.mitax-product .swiper-container', {
      effect: 'coverflow',
      slidesPerView: 3,
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
    .mitax-product {
      .swiper-container {
        .swiper-wrapper {
          .swiper-slide {
            .plan-A {
              background-color: #fbb03b;
              > h2 {
                font-size: 0.34rem;
                color: #ffffff;
                line-height: 0.34rem;
                font-weight: normal;
              }
            }
            .plan-B {
              background-color: #c1272d;
              > h2 {
                font-size: 0.34rem;
                color: #ffffff;
                line-height: 0.34rem;
                font-weight: normal;
              }
            }
            .plan-C {
              background-color: #8cc63f;
              > h2 {
                font-size: 0.34rem;
                color: #ffffff;
                line-height: 0.34rem;
                font-weight: normal;
              }
            }
          }
        }
      }
    }
  }
}
</style>

