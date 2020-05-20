const getters = {
  bannerList: state => state.home.bannerList, // 首页轮播图列表
  goodsList: state => state.home.goodsList,  // 首页商品列表
  searchGoodsList: state => state.goods.searchGoodsList, // 搜索也商品列表
  categoryList: state => state.goods.categoryList, // 商品分类列表
  categoryGoodsList: state => state.goods.categoryGoodsList, // 商品分类商品列表
  token: state => state.login.token, // 登陆密钥
  shopInfo: state => state.shop.shopInfo // 小店详情
};
export default getters
