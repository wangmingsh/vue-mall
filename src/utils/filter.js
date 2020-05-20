import Vue from 'vue'
// 金钱过滤 ¥xx.xx
Vue.filter('moneyFormat', (value) => {
  return '¥' + Number(value).toFixed(2)
})

// 运费过滤器
Vue.filter('freightType', (value) => {
  if (value.freightMode) {
    if (value.freightMode == 1) {
      return '运费：包邮'
    }
    if (value.freightMode == 3) {
      return '运费：货到付款'
    }
  } else {
    return '运费：¥' + Number(value.express).toFixed(2)
  }
})
// 验证手机号码
Vue.filter('isPhoneNumber', (value) => {
  return !/^[1][3,4,5,7,8][0-9]{9}$/.test(value)
})

