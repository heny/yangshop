<template>
  <div class="Mine">
    <div class="top">
      <i class="iconfont icon-set"></i>
      <h2>个人中心</h2>
      <i class="iconfont icon-msg"><b class="bdage">9+</b></i>
      <div class="header" @click='skip'>
        <div class="img"></div>
      </div>
    </div>
    <div class="like">
      <div class="links"><router-link to="/login">点击登录</router-link></div>
      <div class="likes">
        <router-link to="like"><img src='../../../assets/image/mime/keep.png'>我的收藏 <i v-show='isLogin'>(5)</i></router-link>
      </div>
    </div>
    <div class="order">
      <div class="Ordertop">
        <h2 class="title">我的订单</h2>
        <p><router-link to="all">查看全部订单</router-link></p>
      </div>
      <ul class="orderB">
        <li v-for='(item,index) in orderList' :key='index'>
          <router-link :to="item.path">
            <b class="bdage" v-if='item.num!=0'>{{item.num}}</b>
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="address">
      <h2>收货地址管理</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Mine',
  data () {
    return {
      isLogin: true,
      orderList: [
        {path: 'payment', name: '待付款', img:require('@/assets/image/mime/icon_boligation.png'), num: 0},
        {path: 'shipments', name: '待发货', img:require('@/assets/image/mime/prepare.png'), num: 0},
        {path: 'take', name: '待收货', img:require('@/assets/image/mime/icon_consignee.png'), num: 0},
        {path: 'evaluate', name: '待评价', img:require('@/assets/image/mime/icon_evaluate.png'), num: 0},
        {path: 'refund', name: '退款售后', img:require('@/assets/image/mime/icon_refund.png'), num: 0}
      ]
    }
  },
  methods: {
    skip () {
      this.$router.push('/login')
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
.bdage{
  width .44rem
  height .44rem
  line-height .44rem
  text-align center
  background #ff0000
  color #fff
  vendor(border-radius,50%)
  position absolute
  font-size 12px
}
.address{
  line-height 1.72rem
  margin-top .19rem
  width 100%
  background #fff
  padding-left .63rem
  color #999
  font-size 20px
}
.order{
  width 100%
  height 4.16rem
  background #fff
  .orderB{
    display flex
    justify-content space-around
    color #666666
    li{
      padding-top .6rem
      text-align center
      position relative
      b{
        top 12px
        right 2px
      }
      img{
        width .72rem
        height .61rem
      }
      p{
        margin-top .36rem
        font-size 16px
      }
    }
  }
  .Ordertop{
    display flex
    justify-content space-between
    line-height 1.65rem
    border-bottom .01rem solid #b3b3b3
    padding-left .61rem
    box-sizing border-box
    font-size .47rem
    .title{
      color #333
    }
    a{
      color #ccc
    }
  }
}
.like{
  height 3.49rem
  width 100%
  margin-bottom .19rem
  background #fff
  padding-top 1.28rem
  box-sizing border-box
  .links{
    text-align center
    padding-bottom .69rem
  }
  a{
    font-size 20px
  }
  .likes{
    padding-left .47rem
    a{
      img{
        padding-top .04rem
        margin-right .33rem
        vertical-align top
      }
    }
  }
}
.top{
  width 100%
  height 4.95rem
  padding .96rem .64rem 0 .4rem
  box-sizing border-box
  background #ff9900
  display flex
  justify-content space-between
  color #fff
  i{
    font-size .67rem
    position relative
    b{
      top -6px
      right -6px
    }
  }
  h2{
    font-size .52rem
    padding-top .07rem
  }
  .header{
    width 2.77rem
    height 2.77rem
    vendor(border-radius,50%)
    background #fff
    padding .19rem
    box-sizing border-box
    position absolute
    left 50%
    top 3.15rem
    transform translateX(-50%)
    .img{
      width 2.41rem
      height 2.41rem
      vendor(border-radius,50%)
      background #e6dfdf
    }
  }
}
.Mine{
  height 92.5vh
  background #f3f3f3
}
</style>
