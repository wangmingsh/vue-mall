import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

// 解决在VUE项目中点击两次路由切换报错
const VueRouterPush = Router.prototype.push;
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
};

const footer = () => import('../layout/footer');
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home', // 首页
    components: {
      default: () => import('../views/home/index'),
      footer: footer
    },
    meta: {
      // 是否缓存
      keepAlive: true
    }
  }, {
    path: '/category', // 商品分类
    components: {
      default: () => import('../views/category/index'),
      footer: footer
    },
    meta: {
      // 是否缓存
      keepAlive: true,
    },
  }, {
    path: '/cart', // 购物车
    components: {
      default: () => import('../views/cart/index'),
      footer: footer
    },
    meta: {
      // 是否缓存
      keepAlive: true,
      // 需要权限验证
      requireAuth: true
    }
  }, {
    path: '/profile', // 用户中心
    components: {
      default: () => import('../views/profile/index'),
      footer: () => import('../layout/footer')
    },
    meta: {
      // 是否缓存
      keepAlive: true,
      // 需要权限验证
      requireAuth: false
    }
  },
  {
    path: '/goodsDetail', // 商品详情
    component: () => import('../views/goodsDetail/index')
  },
  {
    path: '/goods-search', // 商品搜索
    component: () => import('../views/search/index')
  },
  {
    path: '/login', // 登陆
    component: () => import('../views/login/index'),
    meta: {
      // 是否缓存
      keepAlive: true
    }
  },
  { // 是否在微信浏览器打开
    path: '/wxBrowser',
    component: () => import('../layout/error-page/isWxBrowser')
  }
];
export default new Router({
  mode: 'history',
  routes,
  // 解决路由跳转页面没有置顶
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
})
