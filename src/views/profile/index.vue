<template>
  <div class="bf-profile">
    <van-cell-group class="bf-login-box">
      <van-cell is-link :to="{ path: '/login'}">
        <div slot="title">
          <div class="bf-user-status">
            <img src="~@/assets/svg/not-login.svg">
            <div class="bf-is-login" v-if="token">
              <span>张三</span>
              <span>
                手机号：132****9257
              </span>
            </div>
            <div class="bf-not-login" v-else>
              <span>
                立即登陆
              </span>
            </div>
          </div>
        </div>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="bf-order-box">
      <van-cell
        title="我的订单"
        value="查看全部订单"
        is-link
      />
      <van-grid column-num="5">
        <van-grid-item icon="cart-circle-o" text="待付款" />
        <van-grid-item icon="smile-comment-o" text="待发货" />
        <van-grid-item icon="gift-o" text="待收货" />
        <van-grid-item icon="sign" text="已完成" />
        <van-grid-item icon="cash-back-record" text="售后/退款" />
      </van-grid>
    </van-cell-group>
    <van-cell-group>
      <van-cell
        v-for="item in list"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
        is-link
      />
    </van-cell-group>
  </div>
</template>

<script>
  import { Cell, CellGroup, Grid, GridItem } from 'vant';
  import { mapGetters } from 'vuex'
  export default {
    name: "index",
    components: {
      [CellGroup.name]: CellGroup,
      [Cell.name]: Cell,
      [Grid.name]: Grid,
      [GridItem.name]: GridItem
    },
    data() {
      return {
        list: [{
          title: '我的收货地址',
          url: '',
          icon: 'location-o'
        },{
          title: '分销中心',
          url: '',
          icon: ''
        },{
          title: '联系客服',
          url: '',
          icon: 'phone-o'
        },{
          title: '账户与安全',
          url: '',
          icon: ''
        },{
          title: '设置',
          url: '',
          icon: 'setting-o'
        }]
      }
    },
    computed:{
      ...mapGetters(['token'])
    }
  }
</script>

<style scoped lang="less">
  .bf-profile{
    .bf-login-box{
      .van-cell{
        background-color: rgb(45, 45, 45);
        color: #fff;
        margin-top: -1px;
      }
      /deep/.van-cell__right-icon{
        margin-top: 48px;
      }
      .bf-user-status{
        height: 120px;
        line-height: 120px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        position: relative;
        img{
          width: 70px;
          height: 70px;
          background-color: #fff;
          border-radius: 50%;
        }
        .bf-not-login, .bf-is-login{
          display: -webkit-box;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          margin-left: 15px;
          line-height: 1;
          span {
            line-height: 24px;
          }
        }
      }
    }
    .bf-order-box{
      margin-bottom: 7px;
    }
    /deep/.van-grid-item__content::after{
      border: 0;
    }
    /deep/ .van-hairline--top::after{
      border-top-width: 0;
    }
  }
</style>
