<template>
  <div>
    <van-search
      v-model="keyWord"
      placeholder="请输入搜索关键词"
      input-align="center"
      show-action
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
      <div slot="left">
        <slot name="left"/>
      </div>
    </van-search>
  </div>
</template>

<script>
  import {Search, Toast} from 'vant'

  export default {
    name: "search",
    components: {
      [Search.name]: Search,
      [Toast.name]: Toast
    },
    data() {
      return {
        keyWord: ''
      }
    },
    created() {
      this.keyWord = this.$route.query.keyWord
    },
    methods: {
      onSearch() {
        if(this.keyWord) {
          this.$emit('goSearch', this.keyWord)
        } else {
          Toast.fail('请输入内容')
        }

      }
    },
    deactivated() {
      this.keyWord = ''
    },
    destroyed() {
      this.keyWord = ''
    }
  }
</script>

<style scoped>

</style>
