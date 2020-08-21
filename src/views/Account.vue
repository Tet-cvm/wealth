<template>
  <div class="account">
    <div class="account-banner"></div>
    <!--【原因】-->
    <div class="account-reason">
      <div class="account-head">
        <h1>原因</h1>
        <em>REASON</em>
      </div>
      <template v-for="(item, index) in reasonData">
        <div :key="index" class="account-list">
          <div class="account-item">
            <img :src="item.image" alt="" />
            <span :class="'item-label' + index">{{ item.birth }}</span>
          </div>
          <p>{{ item.article }}</p>
        </div>
      </template>
    </div>
    <!--【优势】-->
    <div class="account-advantage">
      <div class="account-head">
        <h1>优势</h1>
        <em>ADVANTAGE</em>
      </div>
      <div class="account-strip">
        <template v-for="(item, index) in advantageData">
          <div :key="index" class="strip-item">
            <h3>{{ item.name }}</h3>
            <div>
              <p>{{ item.article }}</p>
              <img :src="item.image" alt="" />
            </div>
          </div>
        </template>
      </div>
    </div>
    <!--【合作内容】-->
    <div class="account-cooperation">
      <div class="account-head">
        <h1>合作内容</h1>
        <em>COOPERATION</em>
      </div>
      <div class="account-circle">
        <span>明动服务</span>
        <template v-for="(item, index) in circleData">
          <span :key="index" v-html="item.name"></span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data() {
    return {
      reasonData: [
        {
          image: "",
          birth: "政府规定",
          article: "财政部门建议: 2005年1月1日起全国范围内小企业实行新的《小企业会计制度》, 广大的小企业要根据会计业务的需要, 要设置会计机构, 或者在有关的机构中设置会计人员, 或会计主管人员, 不具备条件的, 要委托经过批准设立的, 从事上海代理记账机构来外包。"
        },
        {
          image: "",
          birth: "节省费用",
          article: "单位设会计岗位, 工资开支一般每月要5000元（不包括“五险一金”）, 根据本单位部门经理的收入水平, 财务负责人的工资高的可达上万元, 而找上海财务代理知名品牌的我们, 支付的费用与单位的工资水平无关, 一般为300-1000元。"
        }
      ],
      advantageData: [
        {
          name: "明码实价",
          article: "代理记账价格透明, 帮助客户节约人力成本",
          image: ""
        },
        {
          name: "存档健全",
          article: "一客户一档案, 电子、纸质双重保障, 现金账目与电子款项一一对应, 确保数据安全",
          image: ""
        },
        {
          name: "专业效率",
          article: "每个客户配备1名财务专员及财务总监, 双重服务, 效率加倍",
          image: ""
        },
        {
          name: "全责担保",
          article: "签订代理记账合同, 条例清晰, 权责分明",
          image: ""
        }
      ],
      circleData: [
        {
          name: "核对<br>财务<br>账目"
        },
        {
          name: "编制<br>记账<br>凭证"
        },
        {
          name: "编制<br>会计<br>报表"
        },
        {
          name: "电子<br>网络<br>申报"
        },
        {
          name: "财务<br>政策<br>传递"
        },
        {
          name: "日常<br>电话<br>答疑"
        },
        {
          name: "审核<br>原始<br>凭证"
        },
        {
          name: "建立<br>企业<br>账套"
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.account {
  background-color: #ffffff;
  .account-banner {
    width: 7.5rem;
    height: 3.6rem;
    background-color: #EEEEEE;
  }
  .account-reason {
    margin: 0.68rem 0 0 0;
    padding: 0 0 0.48rem 0;
    .account-list {
      .account-item {
        position: relative;
        margin: 0.42rem 0 0 0;
        > img {
          position: relative;
          margin: 0 auto;
          width: 6.7rem;
          height: 4.2rem;
          background-color: #EEEEEE;
        }
        > span {
          position: absolute;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0.78rem 0 0.12rem 0;
          top: 3.5rem;
          left: 0.68rem;
          width: 0.9rem;
          font-size: 0.32rem;
          color: #ffffff;
          text-align: center;
          line-height: 0.38rem;
        }
        .item-label0 {
          background: rgba(99, 173, 255, 0.8);
          &:after {
            position: absolute;
            top: 1.14rem;
            left: -0.3rem;
            content: "";
            width: .2rem;
            height: .04rem;
            background: rgba(99, 173, 255, 0.8);
          }
        }
        .item-label1 {
          background: rgba(43, 208, 145, 0.8);
          &:after {
            position: absolute;
            top: 1.14rem;
            left: -0.3rem;
            content: "";
            width: .2rem;
            height: .04rem;
            background: rgba(43, 208, 145, 0.8);
          }
        }
      }
      > p {
        margin: 1.2rem auto 0 auto;
        width: 6.7rem;
        font-size: 0.3rem;
        color: #212121;
        font-weight: 400;
        line-height: 0.58rem;
        text-indent: 2em;
      }
    }
  }
  .account-advantage {
    padding: 0.68rem 0 0.48rem 0;
    border-top: 1px solid #EEEEEE;
    .account-strip {
      .strip-item {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 6.7rem;
        border-bottom: 1px solid #EEEEEE;
        > h3 {
          margin: 0.42rem 0 0 0;
          font-size: 0.34rem;
          color: #333333;
          font-weight: bolder;
        }
        > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0.28rem 0 0 0;
        padding: 0 0 0.28rem 0;
          > p {
            width: 4rem;
            font-size: 0.28rem;
            color: #5f6464;
            font-weight: 400;
            line-height: 0.48rem;
          }
          > img {
            width: 2.16rem;
            height: 2.34rem;
            border-radius: 0.05rem;
            background-color: #EEEEEE;
          }
        }
      }
    }
  }
  .account-cooperation {
    padding: 0.68rem 0 0.48rem 0;
    border-top: 1px solid #EEEEEE;
    background-color: #EEEEEE;
    .account-circle {
      margin: 0.48rem auto 0 auto;
      position: relative;
      width: 6.7rem;
      height: 6.7rem;
      background: url("~@/assets/image/circle.png") no-repeat;
      background-size: 3.24rem 3.24rem;
      background-position: center center;
      > span {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.36rem;
        height: 1.36rem;
        font-size: 0.3rem;
        color: #ffffff;
        line-height: 0.34rem;
        // background-color: #cf5955;
        background: rgba(255, 0, 0, 0.6);
        border-radius: 50px;
        transform: translate(-50%);
        &:nth-child(1) {
          top: 50%;
          left: 50%;
          width: 2.26rem;
          height: 2.26rem;
          font-size: 0.4rem;
          color: #212121;
          line-height: 0.34rem;
          font-weight: bolder;
          background-color: #ffffff;
          border-radius: 1000px;
          transform: translate(-50%, -50%);
        }
        &:nth-child(2) {
          top: 0;
          left: 50%;
        }
        &:nth-child(3) {
          top: 13%;
          left: 79%;
        }
        &:nth-child(4) {
          top: 40%;
          left: 89.8%;
        }
        &:nth-child(5) {
          bottom: 13%;
          left: 79%;
        }
        &:nth-child(6) {
          bottom: 0;
          left: 50%;
        }
        &:nth-child(7) {
          bottom: 13%;
          left: 21%;
        }
        &:nth-child(8) {
          top: 40%;
          left: 10.1%;
        }
        &:nth-child(9) {
          top: 13%;
          left: 21%;
        }
      }
    }
  }
  .account-head {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    > h1 {
      margin: 0 0 0 0.39rem;
      font-size: 0.4rem;
      color: #333333;
      line-height: 0.4rem;
      font-weight: bolder;
    }
    > em {
      margin: 0 0 0 0.22em;
      font-size: 0.28rem;
      color: #666666;
      line-height: 0.28rem;
      font-weight: normal;
    }
  }
}
</style>

