<template>
  <div id="wind">
    <Header @btn-slider="onSlider">
      <router-view :slider="slider" />
    </Header>
  </div>
</template>

<script>
import { injectScript } from '@/assets/js/usualUtils.js'
import Header from "@/components/Header.vue"
export default {
  name: "App",
  data() {
    return {
      slider: false
    }
  },
  components: {
    Header
  },
  created() {
    process.env.NODE_ENV === "production" ? "" : injectScript("./statics/js/vconsole.min.js");
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
  -webkit-overflow-scrolling: touch;
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
@-webkit-keyframes v-circular {
	0% {
		stroke-dasharray: 1,200;
		stroke-dashoffset: 0
	}

	50% {
		stroke-dasharray: 90,150;
		stroke-dashoffset: -40
	}

	100% {
		stroke-dasharray: 90,150;
		stroke-dashoffset: -120
	}
}

@keyframes v-circular {
	0% {
		stroke-dasharray: 1,200;
		stroke-dashoffset: 0
	}

	50% {
		stroke-dasharray: 90,150;
		stroke-dashoffset: -40
	}

	100% {
		stroke-dasharray: 90,150;
		stroke-dashoffset: -120
	}
}
</style>
