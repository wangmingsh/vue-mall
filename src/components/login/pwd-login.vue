<template>
  <div>
    <h2 class="bf-login-title">账户密码登陆</h2>
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
        type="password"
        v-model="form.password"
        name="用户名"
        :border="false"
        placeholder="请输入密码"
        maxlength="11"
        clearable
        required
      />
      <div style="margin: 20px 0 10px 0;">
        <van-button size="16" color="rgb(206, 149, 92)" block type="info" native-type="submit">
          登 录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import { Form, Field, Button} from 'vant'
  export default {
    name: "code-login",
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
