<template>
  <div class="poster" v-show="cover" ref="poster">
    <div class="poster-panel" ref="panel" @click="onPoster">
      <div class="poster-cancel" @click="onCancel">
        <img src="~@/assets/image/cancel.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Poster',
  props: {
    toggle: Boolean
  },
  data() {
    return {
      cover: false,
    }
  },
  watch: {
    toggle: {
      handler: function() {
        if (this.toggle) {
          this.cover = true;
          setTimeout(() => {
            this.$refs.poster.style.opacity = '1';
            this.$refs.panel.style.top = '50%';
          }, 30);
        } else {
          this.$refs.poster.style.opacity = '0';
          this.$refs.panel.style.top = '42%';
          setTimeout(() => {
            this.cover = false;
          }, 330);
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    onCancel() {
      this.$emit("btn-cancel");
    },
    onPoster() {
      this.$emit("btn-poster");
    }
  }
}
</script>

<style lang="less" scoped>
.poster {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  opacity: 0;
  background: rgba(0, 0, 0, 0.46);
  transition: opacity 300ms ease-out 100ms;
  z-index: 999;
  .poster-panel {
    position: absolute;
    top: 42%;
    left: 50%;
    width: 4.8rem;
    height: 6.2rem;
    transform: translate(-50%, -50%);
    border-radius: 0.12rem;
    transition: top 300ms ease-out 100ms;
    background: url('./../assets/image/mitax.jpg') no-repeat;
    background-size: 100% 100%;
    background-position: top center;
    background-color: #ffffff;
    .poster-cancel {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0 0 4rem;
      width: 0.8rem;
      height: 0.8rem;
      > img {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
}

</style>'