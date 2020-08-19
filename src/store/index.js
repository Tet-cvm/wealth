import { createStore } from 'vuex'

export default createStore({
  state: {
    stateType: true, // 控制顶部固定栏目全屏和非全屏
    stateToggle: false, // 控制右侧菜单栏目显示隐藏
    statePoster: false, // 是否显示海报广告
  },
  getters: {
    getStateType(state) {
      return state.stateType;
    },
    getStateToggle(state) {
      return state.stateToggle;
    },
    getStatePoster(state) {
      return state.statePoster;
    }
  },
  mutations: {
    setStateType(state, stateType) {
      state.stateType = stateType;
    },
    setStateToggle(state, stateToggle) {
      state.stateToggle = stateToggle;
    },
    setStatePoster(state, statePoster) {
      state.statePoster = statePoster;
    }
  },
  actions: {
  },
  modules: {
  }
})
