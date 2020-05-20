<template>
  <div class="category">
    <van-tabs
      v-model="active"
      @change="fetchGoodsList(true)"
      swipeable
      sticky
      animated
      color="#323233"
    >
      <van-tab
        style="padding-top:10px;height:calc(100vh - 54px);overflow-y: auto;-webkit-overflow-scrolling: touch;"
        v-for="item in categoryList"
        :title="item.name"
        :key="item.id"
      >
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            :finished-text="categoryGoodsList.length ? '没有更多了' : ''"
            @load="onLoad"
            :immediate-check="false"
          >
            <goods-item :goods-list="categoryGoodsList" />
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
    <not-data v-if="!categoryGoodsList.length && !refreshing">
      <div slot="img">
        <img
          class="not-data-img"
          src="@/assets/images/search/not-data-search.png"
          alt="暂无数据"
        />
      </div>
      <p class="not-data-p" slot="tips">
        此分类暂无数据
      </p>
    </not-data>
  </div>
</template>

<script>
import { Tab, Tabs, List, PullRefresh } from "vant";
import NotData from "@/common/not-data";
import GoodsItem from "@/common/goods-item";
import { mapGetters } from "vuex";
export default {
  name: "index",
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    GoodsItem,
    NotData
  },
  computed: {
    ...mapGetters(["categoryList", "categoryGoodsList"])
  },
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      count: 0,
      page: 1
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.$store.dispatch("goods/getCategory").then(() => {
        this.fetchGoodsList();
      });
    },
    fetchGoodsList(isTab) {
      if (isTab) {
        this.page = 1;
      }
      const cId = this.categoryList[this.active].id;
      this.$store
        .dispatch("goods/getCategoryGoodsList", { cId, page: this.page, isTab })
        .then(res => {
          this.count = res.count;
          this.refreshing = false;
          this.loading = false;
          this.finished = false;
        });
    },
    onLoad() {
      setTimeout(() => {
        if (this.categoryGoodsList.length >= this.count) {
          this.finished = true;
        } else {
          this.page++;
          this.fetchGoodsList(this.active);
        }
      }, 500);
    },
    onRefresh() {
      this.paga = 1;
      // 清空列表数据
      setTimeout(() => {
        this.$store.commit("goods/clearCategoryGoodsList");
        this.fetchGoodsList(this.active);
        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        // this.loading = true
        // this.onLoad()
      }, 500);
    }
  }
};
</script>

<style scoped lang="less">
.category {
  .van-tab__pane-wrapper {
    padding-bottom: 50px;
  }
}
</style>
