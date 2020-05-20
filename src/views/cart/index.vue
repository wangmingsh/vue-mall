<template>
    <div class="cart">
      <nav-bar title="购物车" :rightBtnFun="rightBtnFun" rightBtnText="编辑"/>

      <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmitOrder"
      >
        <van-checkbox v-model="checked" checked-color="#ce955c">全选</van-checkbox>
      </van-submit-bar>
    </div>
</template>

<script>
  import { SubmitBar,Checkbox, CheckboxGroup } from 'vant';

  import NavBar from '@/common/nav-bar'
  
  export default {
    name: "index",
    components: {
      [SubmitBar.name]: SubmitBar,
      [CheckboxGroup.name]: CheckboxGroup,
      [Checkbox.name]: Checkbox,
      NavBar
    },
    computed: {
      
    },
    data() {
      return {
        checked: false
      }
    },
    methods: {
      rightBtnFun() {

      },
      onSubmitOrder() {

      }
    }
  }
</script>

<style scoped lang="less">
  .cart{
    .van-submit-bar{
      bottom: 50px
    }
    .van-submit-bar__bar{
      padding-right: 0;
      .van-submit-bar__button{
        height: 100%;
        border-radius: 0;
        background: #ce955c;
      }
    }
  }
</style>
