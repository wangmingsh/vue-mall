<template>
  <div class="nav-bar">
    <van-nav-bar
      :title="title"
      :right-text="rightBtnText"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
  import { NavBar } from 'vant'
  export default {
    name: "nav-bar",
    components: {
      [NavBar.name]: NavBar
    },
    props: {
      title: {
        type: String,
        default() {
          return '我的小店'
        }
      },
      rightBtnText: {
        type: String,
        default() {
          return ''
        }
      },
      rightBtnFun: {
        type: Function,
        default: null
      }
    },
    methods: {
      onClickLeft() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },
      onClickRight() {
        this.rightBtnFun()
      }
    }
  }
</script>

<style scoped lang="less">
  .nav-bar{
    .van-nav-bar {
      .van-icon {
        color: #c2c4ca;
        font-size: 18px;
      }
      .van-nav-bar__text{
        color: #333;
      }
    }
  }
</style>
