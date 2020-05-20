import request from '@/utils/request'

export function _getShopInfo() {
  return request({
    url: 'store',
    type: 'get'
  })
}
