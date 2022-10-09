import {createStore} from "vuex";
const store = createStore({
  state: {name: "root", spinning: false, collapsed: false},
  mutations: {
    changeSpinning(state, spinning) {
      state.spinning = spinning;
    },
    changeCollapsed(state, collapsed) {
      state.collapsed = collapsed;
    }
  },
  getters: {},
  actions: {},
  modules: {}
});
export default store;
