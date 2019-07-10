<template>
  <div class="cate">
    <div class="top">
      <div class="search">
        <input type="text" placeholder="Montagne jeunesse">
        <i class="icon-search iconfont searchIcon"></i>
      </div>
    </div>
    <div v-if='!list.length'>
      <Skeleton v-for='(i,index) in 3' :key='index'></Skeleton>
    </div>
    <div class="bodys">
      <div class="left">
        <ul>
          <li v-for='(item,index) in list' :class="{active:num===index}" :key='index' @click='skip(index)'>{{item.name}}</li>
        </ul>
      </div>
      <div class="bar"></div>
      <div class="right" v-if='list.length'>
        <ul class="clearfix">
          <li v-for="item in list[num].list" :key='item.id'>
            <img :src="item.thumbnail" alt="">
            <h2>{{item.name}}</h2>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cate',
  data () {
    return {
      num: 0,
      list: []
    }
  },
  mounted () {
    this.$axios.get('/api/getClassify').then(res => {
      this.list = res.data.data
    })
  },
  methods: {
    skip (num) {
      this.num = num
      console.log(num)
    }
  }
}
</script>
<style lang="stylus" scoped>
vendor(prop,args){
  -webkit-{prop} args
  -moz-{prop} args
  {prop} args
}
.top {
  height 1.84rem
  background #fa4071
  padding-top .77rem
  box-sizing border-box
  display flex
  justify-content center
  position sticky
  top 0
  .search {
    width 6.88rem
    height .8rem
    position relative
  }
  input {
    line-height .8rem
    padding 0 .29rem
    vendor(border-radius,.13rem)
    width 6.88rem
    margin 0 auto
    opacity .9
  }
  .searchIcon {
    position absolute
    top .11rem*2
    right -0.13rem*2
  }
}
.bar{
  width 3.12rem
  height 82vh
}
.bodys{
  display flex
  .left{
    width 3.12rem
    height 82vh
    background #fafafa
    position fixed
    ul{
      display flex
      flex-direction column
      li{
        line-height 1.25rem
        text-align center
        font-size 16px
        position relative
      }
      .active{
        background #fff
        color #ff9900
        &:before{
          content ''
          position absolute
          left 0
          width .13rem
          height 1.25rem
          background #1d84a7
        }
      }
    }
  }
  .right{
    width 6.88rem
    overflow auto
    padding .28rem 0 0 .23rem
    box-sizing border-box
    ul{
      li{
        width 3.07rem
        height 3.19rem
        margin 0 .25rem .31rem 0
        box-sizing border-box
        border .04rem solid #1d84a7
        padding .19rem .36rem .01rem .36rem
        float left
        position relative
        vendor(border-radius,10px)
        img{
          width 2.2rem
          height 2.29rem
        }
        h2{
          width 100%
          line-height .67rem
          position absolute
          bottom 0
          left 0
          background #1d84a7
          color #fff
          text-align center
          vendor(border-radius,0 0 10px 10px)
        }
      }
    }
  }
}
</style>
