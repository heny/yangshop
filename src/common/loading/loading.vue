<template>
  <div class="loading">
    <img width="50" height="50" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/scss">
  .loading{
    text-align: center;
    .desc{
      line-height: 20px;
      font-size: 18px;
      color: #fff;
    }
  }
</style>
