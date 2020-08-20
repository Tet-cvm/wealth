<template>
  <div class="account">
    <div class="account-banner"></div>
    <div class="account-reason">
      <div class="account-head">
        <h1>原因</h1>
        <em>THE REASON</em>
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
          article: "财政部门建议：2005年1月1日起全国范围内小企业实行新的《小企业会计制度》,广大的小企业要根据会计业务的需要，要设置会计机构，或者在有关的机构中设置会计人员，或会计主管人员，不具备条件的，要委托经过批准设立的，从事上海代理记账机构来外包。"
        },
        {
          image: "",
          birth: "节省费用",
          article: "单位设会计岗位，工资开支一般每月要5000元（不包括“五险一金”），根据本单位部门经理的收入水平，财务负责人的工资高的可达上万元，而找上海财务代理知名品牌的我们，支付的费用与单位的工资水平无关，一般为300-1000元。"
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
    background-color: red;
  }
  .account-reason {
    margin: 0.68rem 0 0 0;
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
    .account-list {
      .account-item {
        position: relative;
        margin: 0.42rem 0 0 0;
        > img {
          position: relative;
          margin: 0 auto;
          width: 6.7rem;
          height: 4.2rem;
          background-color: red;
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
            left: -.3rem;
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
            left: -.3rem;
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
}
</style>

