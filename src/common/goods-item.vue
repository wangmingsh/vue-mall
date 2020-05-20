<template>
  <section class="goods-item">
    <router-link tag="div"  class="goods-card" v-for="value in goodsList" :key="value.id" :to="{ path: 'goodsDetail', query: { goodsId: value.id }}">
      <div class="goods-card-img">
        <van-image height="175" width="100%" lazy-load :src="value.pic">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </div>
      <div class="goods-card-title" v-text="value.name"/>
      <div class="goods-card-price">
        <span>
          {{ value.price | moneyFormat }}
        </span>
        <del class="goods-originalPrice">
          {{ value.price | moneyFormat }}
        </del>
      </div>
    </router-link>
  </section>
</template>
<script>
  import { Image,Loading } from 'vant'
  export default {
    name: "goods-item",
    props: {
      goodsList : {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      [Image.name]: Image,
      [Loading.name]: Loading
    }
  }
</script>

<style scoped lang="less">
  .goods-item{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 8px 0 8px;
    .goods-card{
      width:calc(50% - 4px);
      background: #fff;
      margin-bottom: 8px;
      line-height: 1;
      .goods-card-title{
        font-size:14px;
        font-weight:400;
        color: #363636;
        padding: 7px 7px 0 7px;
        line-height: 20px;
        height: 40px;
        word-break: break-all;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
      }
      .goods-card-price{
        font-size:16px;
        font-weight: bold;
        padding: 7px;
        color: #c91623;
        .goods-originalPrice{
          font-size: 12px;
          color: #999;
          font-weight: normal;
          padding-left: 2px;
        }
      }
    }
  }
</style>
