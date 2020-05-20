<template>
  <div>
    <h2 class="bf-login-title">立即注册</h2>
    <van-form @submit="onSubmit">
      <van-field
        type="number"
        v-model="form.phone"
        name="用户名"
        :border="false"
        placeholder="请输入手机号"
        maxlength="11"
        clearable
        required
      />
      <van-field
        type="number"
        v-model="form.code"
        name="用户名"
        :border="false"
        placeholder="请输入验证码"
        maxlength="6"
        clearable
        required
      >
        <template #button>
          <van-button class="bf-van-btn" :disabled="form.phone | isPhoneNumber"  color="rgb(206, 149, 92)" size="small" type="primary">获取验证码</van-button>
        </template>
      </van-field>
      <van-field
        type="password"
        v-model="form.password"
        name="用户名"
        :border="false"
        placeholder="请输入密码"
        clearable
        required
      />
      <div style="margin: 20px 0 10px 0;">
        <van-button size="16" color="rgb(206, 149, 92)" block type="info" native-type="submit">
          注 册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import { Form, Field, Button} from 'vant'
  export default {
    name: "register",
    components: {
      [Form.name]: Form,
      [Field.name]: Field,
      [Button.name]: Button
    },
    data() {
      return {
        form: {
          phone: '',
          password: ''
        },

      }
    },

    methods:{
      onSubmit() {

      }
    }
  }
</script>

<style scoped lang="less">

</style>
