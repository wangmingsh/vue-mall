import router from './router'
import store from './store'
// import { isWxBrowser } from "@/utils/iswxbrowser";
// 权限拦截-beforeEach路由钩子函数
router.beforeEach((to,from,next)=>{
  // 1、验证是否是微信浏览器访问网站，如果不是微信浏览器访问网站直接跳转到 {path : /wxBrowser}
  // if(to.path !== '/wxBrowser') {
  //   if(!isWxBrowser()) {
  //     next({
  //       path: '/wxBrowser'
  //     })
  //   }
  // } else {
  //   if(isWxBrowser()) {
  //     next({ path: from.path })
  //   }
  // }
  // 2、页面登陆权限验证
  if(to.meta.requireAuth){ //是否需要权限验证
    if(store.getters.token) { // 如果已登陆放行路由
      next()
    } else { // 没登陆跳转到登陆页面
      // 借助next()方法
      next({
        path: '/login',
        replace: 'true',
        // redirectUrl 用于标记登录后回跳的地址
        redirectUrl: to.fullPath
      })
    }
  } else { // 不需要登陆权限直接放行路由
    next()
  }
  // 3、获取店铺信息
  if(!store.getters.shopInfo) {
    store.dispatch('shop/getShopInfo');
    next()
  }
});
