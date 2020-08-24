import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/js/baseUtils.js'

router.beforeEach((to, from, next) => {
  if (to.name == 'Home') {
    store.commit('setStateType', true);
  } else {
    store.commit('setStateType', false);
  }
  store.commit('setStateToggle', false);
  next();
})

createApp(App).use(store).use(router).mount('#app')
