import { getHomeData } from "@/api/home";

const state = {
  bannerList: [],
  goodsList: [],
  isShowLoading: true
};

const mutations = {
  getProductList: (state, list) => {
    state.goodsList = list.productList;
  },
  getBannerList: (state, list) => {
    state.bannerList = list.bannerList;
  },
  isShowLoading: (state, isShow) => {
    state.isShowLoading = isShow;
  }
};

const actions = {
  async getHomeData({ commit}) {
    const response = await getHomeData();
    const { data } = response;
    commit("getProductList", data);
    commit("getBannerList", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
