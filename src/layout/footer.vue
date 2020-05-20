<template>
    <div>
      <van-tabbar v-model="active" active-color="#1E3460" route safe-area-inset-bottom>
        <van-tabbar-item icon="wap-home-o" to="/home">
          <span>首页</span>
          <template #icon="props">
            <img :src="props.active ? require('../assets/images/tabbar/index_selected.png') : require('../assets/images/tabbar/index_default.png')"/>
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search" to="/category">
          <span>分类</span>
          <template #icon="props">
            <img :src="props.active ? require('../assets/images/tabbar/category_selected.png') : require('../assets/images/tabbar/category_default.png')"/>
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/cart">
          <span>购物车</span>
          <template #icon="props">
            <img :src="props.active ? require('../assets/images/tabbar/shoppingcart_selected.png') : require('../assets/images/tabbar/shoppingcart_default.png')"/>
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/profile">
          <span>我的</span>
          <template #icon="props">
            <img :src="props.active ? require('../assets/images/tabbar/mine_selected.png') : require('../assets/images/tabbar/mine_default.png')"/>
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';

  export default {
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    },
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style scoped></style>
