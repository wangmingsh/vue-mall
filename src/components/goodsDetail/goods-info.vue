<template>
  <div>
    <van-cell-group class="goods-cell-group">
      <van-cell>
        <h1 class="goods-title">
          宝贝详情
        </h1>
      </van-cell>
      <van-cell>
        <van-image v-for="url in detailMobile" :key="url" :src="url">
          <template v-slot:error>加载失败</template>
        </van-image>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "goods-info"
};
</script>

<style scoped>

</style>
