<template>
  <div class='Home'>
    <div class="main">
      <router-view/>
    </div>
    <div class="nav">
      <router-link :to="item.path" active-class="actives" v-for='(item,index) in navList' :key='index'>
        <i :class="['iconfont',item.icon]"></i>
        <p>{{item.text}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      navList: [
        {path: 'index', text: '首页', icon: 'icon-index2'},
        {path: 'cate', text: '分类', icon: 'icon-cate'},
        {path: 'cart', text: '购物车', icon: 'icon-cart'},
        {path: 'mine', text: '我', icon: 'icon-mine'},
      ]
    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.Home{
  padding-bottom 1.33rem
}
.nav {
  position fixed
  bottom 0
  height 1.33rem
  border-top .03rem solid #ccc
  width 100%
  display flex
  justify-content space-between
  background #fff
  a{
    text-align center
    width 25%
    p{
      font-size 14px
    }
    i{
      display inline-block
      font-size 22px
      margin 5px 0
    }
  }
}
.actives{
  color #ff9900
}
</style>
