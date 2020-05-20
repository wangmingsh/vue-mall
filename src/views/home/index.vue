<template>
    <div class="home">
      <!--搜索组件-->
      <top-search @goSearch="goSearchPage" class="search"/>
      <!--轮播组件-->
      <swipe class="swipe" :banner-list="bannerList"/>
      <!--商品卡片-->
      <goods-item :goods-list="goodsList" style="margin-top: 10px;"/>
      <!--分割线-->
      <bottom-divider v-if="goodsList.length>2"/>
    </div>
</template>

<script>
  import goodsItem from '@/common/goods-item'
  import swipe from '@/common/swipe'
  import topSearch from '@/common/top-search'
  import bottomDivider from '@/common/bottom-divider'
  import { mapGetters } from 'vuex'
  export default {
    name: "index",
    components: {
      topSearch,
      swipe,
      goodsItem,
      bottomDivider
    },
    computed: {
      ...mapGetters(['bannerList', 'goodsList']),
    },
    data() {
      return {
        value: ''
      }
    },
    created() {
      this.$store.dispatch('home/getHomeData');
    },
    methods: {
      goSearchPage(keyWord) {
        this.$router.push({path: '/goods-search', query: { keyWord }})
      }
    }
  }
</script>

<style scoped lang="less">
  .home{
    padding-bottom: 50px;
    .search{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 99;
    }
    .swipe{
      margin-top: 50px;
      overflow: hidden;
    }
  }

</style>
