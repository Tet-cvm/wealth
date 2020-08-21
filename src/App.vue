<template>
  <div id="wind">
    <Header @btn-slider="onSlider">
      <router-view :slider="slider" />
    </Header>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  data() {
    return {
      slider: false
    }
  },
  components: {
    Header
  },
  methods: {
    onSlider() {
      this.slider = true;
    }
  }
}
</script>

<style>
*, html, body {
  margin: 0;
  padding: 0;
  font-size: 0.32rem;
  border: 0px;
  outline: 0;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
html, body {
  background-color: #ffffff;
}
img{
  display: block;
}
a, u{
  text-decoration:none;
}
b, em, i{
  font-weight:normal;
  font-style:normal;
}
ul li{
  list-style-type:none;
}
div, span, img {
  cursor: pointer;
}
#wind {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
