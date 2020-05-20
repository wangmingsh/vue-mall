<template>
  <div class="content">
    <div ref="code" class="code"></div>
    <div class="text">
      请使用微信扫码访问链接
      <br>
      或者手机截屏微信中识别
    </div>
  </div>
</template>

<script>
  import QRCode from 'qrcodejs2'
  export default {
    name: "isWxBrowser",
    mounted() {
      this.qrCode()
    },
    methods: {
      qrCode() {
        const url = window.location.origin
        new QRCode(this.$refs.code, {
          render: 'canvas',
          text: url,
          height: 200,
          width: 200
        })
      },
    }
  }
</script>

<style scoped lang="less">
  .content{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    .code{
      padding: 6px;
      background: #fff;
      margin-bottom: 15px;
    }
    .text{
      color: #464a53;
      font-size: 16px;
    }
  }
</style>
