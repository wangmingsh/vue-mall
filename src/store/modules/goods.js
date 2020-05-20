import { getGoodsList, getCategorys, getGoodsDetail } from "@/api/goods";
const state = {
  searchGoodsList: [],
  categoryList: [],
  categoryGoodsList: [],
  goodsDetail: {}
};

const mutations = {
  getGoodsDetail(state, data) {
    state.goodsDetail = data;
    console.log(state.goodsDetail);
  },
  getSearchGoodsList(state, list) {
    state.searchGoodsList = list;
  },
  getCategory(state, list) {
    list.unshift({ id: "", name: "全部" });
    state.categoryList = list;
  },
  getCategoryGoodsList(state, data) {
    if (data.isTab) {
      state.categoryGoodsList = [...state.categoryGoodsList, ...data.list];
    } else {
      state.categoryGoodsList = data.list;
    }
  },
  clearCategoryGoodsList(state) {
    state.categoryGoodsList = [];
  }
};
const actions = {
  //  获取商品详情
  async getGoodsDetail({ commit }) {
    const pId = this.state.route.query.goodsId;
    const { data } = await getGoodsDetail(pId);
    data.albumPic = data.albumPic.map(item => {
      return { id: item, pic: item}
    });
    data.detailMobile = data.detailMobile.split(',');
    commit("getGoodsDetail", data);
  },
  // 获取搜索商品列表
  getSearchGoodsList({ commit }, data) {
    return new Promise((resolve, reject) => {
      getGoodsList("", data.page, data.keyWord)
        .then(response => {
          const { data } = response;
          commit("getSearchGoodsList", data.list);
          resolve(data);
        })
        .catch(e => {
          reject(e);
        });
    });
  },
  // 获取商品分类
  async getCategory({ commit }) {
    const response = await getCategorys();
    const { data } = response;
    commit("getCategory", data);
  },
  // 获取分类商品列表
  async getCategoryGoodsList({ commit }, data) {
    const response = await getGoodsList(data.cId, data.page, data.keyWord);
    const { list } = response.data;
    commit("getCategoryGoodsList", { list, isTab: list.isTab });
    return response.data;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
