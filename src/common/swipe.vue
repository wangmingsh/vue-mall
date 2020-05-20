<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="value in bannerList" :key="value.id">
        <img height="100%" width="100%" :src="value.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem, Image } from 'vant'
  export default {
    name: "seipe",
    props: {
      bannerList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Image.name]: Image
    }
  }
</script>

<style scoped lang="less">
  .my-swipe {
    .van-swipe-item {
      color: #fff;
      text-align: center;
      height: 175px;
    }
  }
</style>
