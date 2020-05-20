<template>
  <div class="bf-login-container">
    <div style="text-align: right">
      <van-icon name="cross" color="#fff" style="padding: 25px" />
    </div>
    <div class="bf-login-box">
      <!--验证码登陆 -->
      <code-login v-show="active ===1"/>
      <!--密码登陆-->
      <pwd-login v-show="active === 2"/>
      <!--修改密码-->
      <pwd-reset v-show="active === 3"/>
      <!--注册-->
      <register v-show="active === 4"/>
      <div class="bf-login-tabBtn">
        <span style="float: left">{{ tabText }}</span>
        <span style="float: right">立即注册</span>
      </div>
      <div class="bf-weChat-login">
        <p>
          - 微信快捷登录 -
        </p>
        <p>
          <img style="background-color: #fff;border-radius: 50%;width: 40px;height: 40px" src="~@/assets/svg/weChat-login.svg" alt="微信登陆"/>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import codeLogin from '@/components/login/code-login'
  import pwdLogin from '@/components/login/pwd-login'
  import pwdReset from '@/components/login/pwd-reset'
  import register from '@/components/login/register'

  import { Icon } from 'vant'
  export default {
    name: "index",
    components: {
      codeLogin,
      pwdLogin,
      pwdReset,
      register,
      [Icon.name]: Icon
    },
    data() {
      return {
        active: 1,
        tabText: '账户密码登陆'
      }
    }
  }
</script>

<style scoped lang="less">
  .bf-login-container{
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    background-image: url('~@/assets/images/login/loginBack.png');
    background-size: 100% 100%;
    overflow: hidden;
    .bf-login-box{
      padding: 0 25px;
      /deep/.bf-login-title{
        color: #fff;
        font-size: 26px;
        margin: 43px 0;
      }
      .bf-login-tabBtn{
        clear: both;
        overflow: hidden;
        margin-top: 15px;
        span{
          font-size:14px;
          color: #fff;
        }
      }
      .bf-weChat-login{
        margin-top: 50px;
        text-align: center;
        font-size: 12px;
        color: #fff;
      }
    }
    /deep/.van-cell{
      background-color: rgba(255, 255, 255, 0.4);
      margin-top: 20px;
      border-radius: 5px;
    }
    /deep/.van-cell:not(:last-child)::after{
      left: 0;
    }
    /deep/.van-field__control{
      color: #fff;
    }
    /deep/.van-field__control::placeholder{
      color: #fff;
    }
    /deep/.van-icon-clear{
      color: #fff;
    }
  }
</style>
