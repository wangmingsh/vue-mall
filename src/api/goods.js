import request from '@/utils/request'

// 根据商品分类ID获取商品
export function getGoodsList(categoryId, page, key) {
  return request({
    url: `/product/list`,
    method: 'get',
    params: {
      categoryId,
      page,
      key
    }
  })
}
// 商品分类列表
export function getCategorys() {
  return request({
    url: '/productCategory/list',
    method: 'get'
  })
}

export function getGoodsDetail(pId) {
  return request({
    url: `/product/${pId}`,
    method: 'get'
  })
}
