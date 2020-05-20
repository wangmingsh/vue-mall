<template>
  <div >
    <top-search class="top-search" @goSearch="goSearchPage">
      <van-icon @click="$router.push('/')" class="top-icon" slot="left" name="arrow-left" />
    </top-search>
    <div v-if="searchGoodsList.length" class="search-goods-list">
      <!--商品卡片-->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <goodsItem :goods-list="searchGoodsList"/>
      </van-list>
    </div>
    <div v-else>
      <not-data>
        <div slot="img">
          <img class="not-data-img" src="@/assets/images/search/not-data-search.png">
        </div>
        <p class="not-data-p" slot="tips">
          找不到你想要的商品
        </p>
      </not-data>
    </div>
  </div>
</template>

<script>
  import topSearch from '@/common/top-search'
  import notData from '@/common/not-data'
  import goodsItem from '@/common/goods-item'

  import { Icon, List } from 'vant'
  import { mapGetters } from "vuex"
  export default {
    name: "index",
    components: {
      topSearch,
      notData,
      goodsItem,
      [Icon.name]: Icon,
      [List.name]: List
    },
    computed: {
      ...mapGetters(['searchGoodsList'])
    },
    data() {
      return {
        page: 1,
        keyWord: '',
        loading: false,
        finished: false
      }
    },
    created() {
      this.keyWord = this.$route.query.keyWord
      this.getSearchGoodsList(this.keyWord)
    },
    methods: {
      getSearchGoodsList(keyWord) {
        this.$store.dispatch('goods/getSearchGoodsList', {keyWord, page: this.page})
      },
      goSearchPage(keyWord) {
        this.$router.push({path: '/goods-search', query: { keyWord }})
        this.keyWord = keyWord
        this.page = 1
        this.getSearchGoodsList(keyWord)
      },
      onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
          this.$store.dispatch('goods/getSearchGoodsList', {keyWord: this.keyWord, page: this.page}).then((res)=>{
            // 加载状态结束
            this.loading = false
            this.page ++
            // 数据全部加载完成
            if (this.searchGoodsList.length >= res.count) {
              this.finished = true
            }
          })
        }, 1000);
      }
    }
  }
</script>

<style scoped lang="less">
  .search-goods-list{
    margin-top: 60px;
  }
  .top-icon{
    color: #c2c4ca;
    font-size: 18px;
    padding: 0 12px 0 0;
  }
  .top-search{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
  }
</style>
