<template>
  <div class="content">
    <div class="header" ref="header" :style="$store.getters.getStateType ? 'background-color: transparent' : 'background-color: #ffffff;border-bottom: 1px solid #EEEEEE;'">
      <div class="header-logo">
        <img v-show="$store.getters.getStateType" src="~@/assets/image/logo-white.png" alt="" />
        <img v-show="!$store.getters.getStateType" src="~@/assets/image/logo-black.png" alt="" />
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
    <Poster :toggle="$store.getters.getStatePoster" @btn-cancel="onCancel" @btn-poster="onPoster" />
  </div>
</template>

<script>
import { getCookie, setCookie } from '@/assets/js/usualUtils.js'
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
      this.onSlide();
    } else {
      this.$store.commit('setStatePoster', true);
      setCookie('advert', process.env.VUE_APP_VERSION, 1);
      this.watchPoster = true;
    }
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
    onPoster() {
      this.$store.commit('setStatePoster', false);
    },
    onSlide() {
      setTimeout(() => {
        this.$emit('btn-slider');
      }, 3600);
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
        width: 2.33rem;
        height: 0.64rem;
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