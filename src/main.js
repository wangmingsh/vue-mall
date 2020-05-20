import Vue from 'vue'
import App from './App.vue'
import { sync } from "vuex-router-sync";
import router from './router'
import store from "./store"
import 'vant/lib/index.css'
import 'amfe-flexible'
import './assets/styles/index.less'
import { Lazyload } from 'vant'
import './promission' // 权限控制
import './utils/filter' // 全局引入过滤器
// // 解决移动端300毫秒延迟
import FastClick from 'fastclick'
FastClick.attach(document.body);
sync(store, router); // done. Returns an unsync callback fn
Vue.use(Lazyload);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
export { router, store }
