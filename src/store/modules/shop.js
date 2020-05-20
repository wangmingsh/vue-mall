import { _getShopInfo } from "@/api/shop";

const state = {
  shopInfo: ""
};

const mutations = {
  getShopInfo(state, data) {
    state.shopInfo = data;
    document.title = data.name;
  }
};

const actions = {
  async getShopInfo({ commit }) {
    const response = await _getShopInfo();
    const { data } = response;
    commit("getShopInfo", data);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
