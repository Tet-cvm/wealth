<template>
  <div class="options" v-show="cover">
    <div class="options-blank" @click="onCancel"></div>
    <div ref="panel" class="options-panel">
      <div class="options-head" @click="onCancel">
        <img src="~@/assets/image/conceal.png" alt="" />
      </div>
      <div class="options-box">
        <template v-for="(item, index) in list">
          <router-link :to="item.path" class="options-list" :key="index">
            <span>{{ item.name }}</span>
            <img src="~@/assets/image/boult.png" alt="" />
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Options',
  props: {
    toggle: Boolean
  },
  data() {
    return {
      cover: false,
      list: [
        {name: '首页', path: '/'},
        {name: '财务代理', path: '/account'},
        {name: '园区直招', path: '/garden'},
        {name: '爱税筹', path: '/mitax'},
        {name: '舟山自贸区', path: '/steamer'},
        {name: '关于我们', path: '/about'},
      ]
    }
  },
  watch: {
    toggle: {
      handler: function() {
        console.log(this.toggle, "@@ this.toggle");
        if (this.toggle) {
          this.cover = true;
          setTimeout(() => {
            this.$refs.panel.style.right = 0;
          }, 30);
        } else {
          this.$refs.panel.style.right = '-5.2rem';
          setTimeout(() => {
            this.cover = false;
          }, 330);
        }
      }
    }
  },
  methods: {
    onCancel() {
      this.$emit('btn-cancel');
    }
  }
}
</script>

<style lang="less" scoped>
.options {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.46);
  z-index: 888;
  .options-blank {
    position: absolute;
    left: 0;
    width: 2.3rem;
    height: 100vh;
  }
  .options-panel {
    position: absolute;
    right: -5.2rem;
    width: 5.2rem;
    height: 100vh;
    transition: right 300ms;
    background-color: #ffffff;
    overflow: hidden;
    .options-head {
      margin: 0 0 0 4.14rem;
      width: 1.06rem;
      height: 0.8rem;
      overflow: hidden;
      > img {
        margin: 0.44rem auto 0 auto;
        width: 0.26rem;
        height: 0.26rem;
      }
    }
    .options-box {
      margin: 0.33rem 0 0 0;
      .options-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 4.4rem;
        height: 1.2rem;
        border-bottom: 1px solid #e7e7e7;
        > span {
          font-size: 0.32rem;
          color: #222222;
          line-height: 0.32rem;
        }
        > img {
          width: 0.12rem;
          height: 0.2rem;
        }
      }
    }
  }
}
</style>