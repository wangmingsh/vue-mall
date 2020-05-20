<template>
  <div>
    <nav-bar title="商品详情"/>
    <swipe style="margin-top:46px" :bannerList="albumPicList"/>
    <!--限时购-->
    <time-limit/>
    <!--商品标题，价格，运费-->
    <time-limit/>
    <!--商品详情-->
    <goods-info :detailMobile="detailMobile"/>
    <van-goods-action>
      <van-goods-action-icon icon="shop-o" text="店铺" to="/" />
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5"  to="cart" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
  import { GoodsAction, GoodsActionIcon, GoodsActionButton, Cell, CellGroup, Image } from 'vant'
  import { mapState } from 'vuex'
  import swipe from '@/common/swipe'
  import NavBar from '@/common/nav-bar'
  import timeLimit from '@/components/goodsDetail/time-limit'
  import goodsInfo from '@/components/goodsDetail/goods-info'
  export default {
    name: "index",
    components: {
      NavBar,
      [GoodsAction.name]: GoodsAction,
      [GoodsActionIcon.name]: GoodsActionIcon,
      [GoodsActionButton.name]: GoodsActionButton,
      [CellGroup.name]: CellGroup,
      [Cell.name]: Cell,
      [Image.name]: Image,
      swipe,
      timeLimit,
      goodsInfo
    },
    computed:{
      ...mapState({
        albumPicList: state => state.goods.goodsDetail.albumPic,
        detailMobile: state => state.goods.goodsDetail.detailMobile,
      })
    },
    created() {
      this.fetch()
    },
    methods: {
      fetch() {
        this.$store.dispatch('goods/getGoodsDetail').then(()=>{

        })
      },
    }
  }
</script>

<style scoped lang="less">
  .goods-cell-group{
    padding-bottom: 50px;
  }
</style>
