<template>
  <div class="not-data">
    <div>
      <slot name="img"></slot>
      <slot name="tips"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "not-data"
  }
</script>

<style scoped lang="less">
  .not-data{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

  }
</style>
