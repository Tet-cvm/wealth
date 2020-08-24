<template>
  <div class="about">
    <div class="about-banner">
      <img src="~@/assets/image/connect.jpg" alt="" />
    </div>
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
      <div>
        <img src="~@/assets/image/reach.png" alt="" />
      </div>
    </div>
    <div class="about-culture">
      <p>成立于2013年,专注于自贸试验区、类金融行业、TMT行业（电信、媒体和科技）及其他新兴行业的企业服务。</p>
      <p>我们的使命是"研究并提供企业需要的服务，帮助企业实现更大的经济效益"。</p>
    </div>
    <div class="about-foot">
      <div class="about-inform">
        <h3>公司地址：</h3>
        <p>中国(上海)自由贸易试验区<br>马吉路28号东华金融大厦1206</p>
      </div>
      <div class="about-inform" style="margin: 0.16rem 0 0 0;">
        <h3>服务热线：</h3>
        <p>400-888-7899</p>
      </div>
      <img src="~@/assets/image/wechat.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="less" scoped>
.about {
  background-color: #ffffff;
  .about-banner {
    width: 7.5rem;
    height: 3.45rem;
    background-color: #eeeeee;
    > img {
      width: 100%;
      height: 100%;
    }
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
      background-color: #eeeeee;
      > img {
        width: 100%;
        height: 100%;
        border: 1px solid #eeeeee;
      }
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
    flex-direction: column;
    margin: 1.46rem 0 0 0;
    width: 7.5rem;
    height: 1.8rem;
    background-color: #2e3033;
    .about-inform {
      display: flex;
      flex-direction: row;
      margin: 0.22rem 0 0 0;
      > h3 {
        flex: 2;
        margin: 0 0 0 0.3rem;
        font-size: 0.3rem;
        color: #ffffff;
        line-height: 0.4rem;
        font-weight: normal;
      }
      > p {
        flex: 7;
        font-size: 0.3rem;
        color: #ffffff;
        line-height: 0.4rem;
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

