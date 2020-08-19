<template>
  <div class="content">
    <div class="header" ref="header" :style="$store.getters.getStateType ? 'background-color: transparent' : 'background-color: #ffffff;'">
      <div class="header-logo">
        <img src="" alt="" />
      </div>
      <div :class="$store.getters.getStateType ? 'header-menu menu-white' : 'header-menu'" @click="onToggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="panel" :style="$store.getters.getStateType ? 'height:' + clientHeight + 'px;margin: 0;' : 'height:' + panelHeight + 'px;'">
      <slot></slot>
    </div>
    <Options :toggle="$store.getters.getStateToggle" @btn-cancel="onToggle" />
    <Poster :toggle="$store.getters.getStatePoster" @btn-cancel="onCancel" />
  </div>
</template>

<script>
import { getCookie, setCookie } from '@/assets/js/utils.js'
import Poster from '@/components/Poster.vue'
import Options from '@/components/Options.vue'
export default {
  name: 'Header',
  components: {
    Poster,
    Options
  },
  data() {
    return {
      clientHeight: 0,
      panelHeight: 0,
      watchPoster: false,
      watchCancel: false,
    }
  },
  watch: {
    watchPoster: {
      handler: function() {
        if (this.watchPoster && this.watchCancel) {
          this.onSlide();
        }
      }
    },
    watchCancel: {
      handler: function() {
        if (this.watchPoster && this.watchCancel) {
          this.onSlide();
        }
      }
    }
  },
  mounted() {
    this.clientHeight = window.innerHeight;
    this.panelHeight = this.clientHeight - this.$refs.header.offsetHeight;
    // 每隔1小时显示海报
    let advert = getCookie('advert');
    if (advert == process.env.VUE_APP_VERSION) {
      console.log('滑动到下一屏');
    } else {
      this.$store.commit('setStatePoster', true);
      setCookie('advert', process.env.VUE_APP_VERSION, 1);
      this.watchPoster = true;
    }
    console.log(advert, "advert", process.env.VUE_APP_AAA, process.env.VUE_APP_VERSION, process.env.NODE_ENV);
  },
  methods: {
    onToggle() {
      let toggle = !this.$store.getters.getStateToggle;
      this.$store.commit('setStateToggle', toggle);
    },
    onCancel() {
      this.watchCancel = true;
      this.$store.commit('setStatePoster', false);
    },
    onSlide() {
      console.log('滑动到下一屏222');
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  position: relative;
  width: 7.5rem;
  min-height: 100vh;
  background-color: #eeeeee;
  overflow: hidden;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 7.5rem;
    height: 1.18rem;
    z-index: 666;
    .header-logo {
      display: flex;
      align-items: center;
      width: 2.33rem;
      height: 1.18rem;
      > img {
        margin: 0 0 0 0.4rem;
        width: 1.93rem;
        height: 0.45rem;
        background-color: #eeeeee;
      }
    }
    .header-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin: 0 0.4rem 0 0;
      width: 0.4rem;
      height: 0.32rem;
      > span {
        display: flex;
        background-color: #1C1C1C;
        &:nth-child(1) {
          width: 0.24rem;
          height: 0.04rem;
        }
        &:nth-child(2) {
          width: 0.4rem;
          height: 0.04rem;
        }
        &:nth-child(3) {
          width: 0.32rem;
          height: 0.04rem;
        }
      }
    }
    .menu-white {
      > span {
        background-color: #ffffff;
      }
    }
  }
  .panel {
    margin: 1.18rem 0 0 0;
    overflow-y: scroll;
  }
}
</style>