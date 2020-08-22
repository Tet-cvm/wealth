<template>
  <div class="about">
    <div class="about-banner"></div>
    <div class="about-connect">
      <h1>联系我们</h1>
      <span>400-888-7899</span>
      <span>上海市浦东新区马吉路28号东华金融大厦1206</span>
    </div>
    <div class="about-connect">
      <h1>官方邮箱</h1>
      <span>mingdongtouzi@mingdong.net.cn</span>
    </div>
    <div class="about-line"></div>
    <div class="about-reach">
      <h1>如何到达【明动咨询】</h1>
      <div></div>
    </div>
    <div class="about-culture">
      <p>成立于2013年,专注于自贸试验区、类金融行业、TMT行业（电信、媒体和科技）及其他新兴行业的企业服务。</p>
      <p>我们的使命是"研究并提供企业需要的服务，帮助企业实现更大的经济效益"。</p>
    </div>
    <div class="about-foot">
      <div class="about-inform">
        <div class="about-address">
          <img src="~@/assets/image/home.png" alt="" />
          <span>公司地址: </span>
        </div>
        <div class="about-number">
          <img src="~@/assets/image/mobile.png" alt="" />
          <span>服务热线: </span>
        </div>
      </div>
      <div class="about-message">
        <span>中国(上海)自由贸易试验区</span>
        <span>马吉路28号东华金融大厦1206</span>
        <span>400-888-7899</span>
      </div>
      <img src="~@/assets/image/wechat.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="less" scoped>
.about {
  background-color: #ffffff;
  .about-banner {
    width: 7.5rem;
    height: 3.6rem;
    background-color: #eeeeee;
  }
  .about-connect {
    > h1 {
      margin: 0.6rem 0 0 0.43rem;
      font-size: 0.34rem;
      color: #212121;
      line-height: 0.34rem;
      font-weight: bold;
    }
    > span {
      display: inline-block;
      margin: 0.28rem 0 0 0.43rem;
      font-size: 0.28rem;
      color: #212121;
      line-height: 0.34rem;
    }
  }
  .about-line {
    margin: 0.48rem auto 0 auto;
    width: 6.9rem;
    height: 1px;
    background-color: #eeeeee;
  }
  .about-reach {
    margin: 0.48rem 0 0 0;
    > h1 {
      margin: 0.6rem 0 0 0.43rem;
      font-size: 0.34rem;
      color: #212121;
      line-height: 0.34rem;
      font-weight: bold;
    }
    > div {
      margin: 0.3rem auto 0 auto;
      width: 6.9rem;
      height: 4.8rem;
      background-color: red;
    }
  }
  .about-culture {
    margin: 0.64rem auto 0 auto;
    width: 6.5rem;
    height: 3.16rem;
    background: url("~@/assets/image/about.png") no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    overflow: hidden;
    > p {
      width: 6rem;
      font-size: 0.3rem;
      color: #212121;
      line-height: 0.46rem;
      text-indent: 2em;
      &:first-child {
        margin: 0.46rem auto 0 auto;
        font-weight: normal;
      }
      &:last-child {
        margin: 0.24rem auto 0 auto;
        font-weight: bolder;
      }
    } 
  }
  .about-foot {
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 1.46rem 0 0 0;
    width: 7.5rem;
    height: 1.8rem;
    background-color: #2e3033;
    .about-inform {
      flex: 2;
      margin: 0 0 0 0.28rem;
      .about-address {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0.32rem 0 0 0;
        > img {
          width: 0.32rem;
          height: 0.32rem;
        }
        > span {
          margin: 0 0 0 0.08rem;
          font-size: 0.26rem;
          color: #ffffff;
          line-height: 0.26rem;
        }
      }
      .about-number {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0.57rem 0 0 0;
        > img {
          width: 0.32rem;
          height: 0.32rem;
        }
        > span {
          margin: 0 0 0 0.08rem;
          font-size: 0.26rem;
          color: #ffffff;
          line-height: 0.26rem;
        }
      }
    }
    .about-message {
      flex: 7;
      display: flex;
      flex-direction: column;
      > span {
        font-size: 0.26rem;
        color: #ffffff;
        line-height: 0.26rem;
        &:nth-child(1) {
          margin: 0.38rem 0 0 0;
        }
        &:nth-child(2) {
          margin: 0.12rem 0 0 0;
        }
        &:nth-child(3) {
          margin: 0.22rem 0 0 0;
        }
      }
    }
    > img {
      position: absolute;
      top: -1.2rem;
      right: 0.1rem;
      width: 1.6rem;
      height: 1.8rem;
    }
  }
}
</style>

