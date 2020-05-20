import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import shop from './modules/shop' // 商店信息

import login from './modules/login' // 登陆，注册，修改密码

import home from './modules/home' // 首页数据


import goods from './modules/goods' // 商品相关
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    shop,
    login,
    home,
    goods
  },
  strict: process.env.NODE_ENV !== 'production',
  getters
});
export default store
