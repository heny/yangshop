<template>
  <div class='Detail'>
    <div class="top">
      <div class="nav">
        <div class="back"><i class="iconfont icon-left"></i></div>
        <div class="shops"><i class="iconfont icon-Cart"></i></div>
        <div class="dot"><i class="iconfont icon-more2"></i></div>
      </div>
    </div>
    <div class="title">
      <div class="title-top">
        <h2>Aptamil 德国爱他美  婴儿奶粉  2段800/克 3罐装  6-10月</h2>
        <div class="like">
          <i :class="['iconfont',{'icon-start':!like},{'icon-start1':like}]" @click='like=!like'></i>
          <h4>收藏</h4>
        </div>
      </div>
      <div class="title-bot">
        <div class="price">
          <h4 class="hotprice">￥445.00</h4>
          <del class="oriprice">￥998.00</del>
        </div>
        <div class="discount">
          <ul class="discount-top clearfix">
            <li>6.5折</li>
            <li>包邮</li>
          </ul>
          <ul class="discount-bot">
            <li>正品货源</li>
            <li>一件代发</li>
            <li>全球直邮</li>
            <li>售后无忧</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tab">
      <router-link to="" class="actives">商品详情</router-link>
      <router-link to="">买家口碑</router-link>
    </div>
    <router-view></router-view>
    <div class="bottoms">
      <div class="bom-price">
        总价：<i>￥0.00</i>
      </div>
      <button class="add-shop" @click='sha=true'>加入购物车</button>
      <button class="fast-buy" @click='sha=true'>立即购买</button>
    </div>
    <transition enter-active-class='animated fadeInUp faster' leave-active-class='animated fadeOutDown faster'>
      <div class="shadowbom" v-show='sha' @click.self='sha=false'>
        <div class="main">
          <div class="header"></div>
          <i class="iconfont icon-delete close" @click='sha=false'></i>
          <div class="text">
            <p style="color:#eb2222">￥445.00</p>
            <p>库存1333333件</p>
            <p>请选择商品属性</p>
          </div>
          <div class="chnum clearfix">
            <h3>购买数量</h3>
            <div class="calcs">
              <button>+</button><i>1</i><button>-</button>
            </div>
          </div>
          <dl class="clearfix">
            <dt>大小</dt>
            <dd>1L</dd>
            <dd>2L</dd>
            <dd>3L</dd>
            <dd>4L</dd>
          </dl>
          <dl class="clearfix">
            <dt>年龄</dt>
            <dd>5岁以下</dd>
            <dd>3岁以下</dd>
          </dl>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  data () {
    return {
      like: false,
      sha: true
    }
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.shadowbom{
  width 100%
  height calc(100vh - 1.33rem)
  background #eee
  position fixed
  top 0
  background rgba(0,0,0,.3)
  .main{
    width 100%
    height 7.65rem
    background #fff
    position absolute
    bottom 0
    box-sizing border-box
    padding 2.79rem .53rem 0 .56rem
    dl{
      margin-bottom .33rem
      dt{
        font-size 16px
        line-height .91rem
      }
      dd{
        float left
        // width 1.6rem
        padding 0 .59rem
        line-height .6rem
        background #ddd
        text-align center
        border-radius .11rem
        font-size 14px
        color #fff
        margin-right .27rem
      }
    }
    .chnum{
      line-height .67rem
      margin-bottom .25rem
      h3{
        font-size 18px
        float left
      }
      .calcs{
        float right
        button{
          width .67rem
          background #999
          color #fff
          height .67rem
        }
        i{
          height .67rem
          border .04rem solid
          border-color #eee transparent
          width 1.33rem
          box-sizing border-box
          display inline-block
          text-align center
        }
      }
    }
    .header{
      width 2.69rem
      height 2.69rem
      border .09rem solid #eee
      border-radius 5%
      position absolute
      top -28px
      background #fdcb6e
    }
    .text{
      font-size 16px
      line-height 20px
      position absolute
      top .88rem
      left 3.73rem
    }
    .close{
      font-size .75rem
      color #999
      position absolute
      top .39rem
      right .39rem
    }
  }
}
.bottoms{
  background #fff
  height 1.33rem
  display flex
  position fixed
  bottom 0
  z-index 9
  border-top .04rem solid #eee
  button{
    width 2.64rem
    height 100%
    font-size 16px
    color #fff
  }
  .add-shop{
    background #f90
  }
  .fast-buy{
    background #eb2222
  }
  .bom-price{
    width 4.71rem
    height 1.33rem
    line-height 1.33rem
    padding-left .4rem
    box-sizing border-box
    font-size 20px
    i {
      color #eb2222
    }
  }
}
.tab{
  height .91rem
  padding .13rem 1.51rem 0
  margin-top .4rem
  border-top 1px solid #eee
  background #fff
  display flex
  justify-content space-between
  a{
    display inline-block
    width 2rem
    height .67rem
    line-height .67rem
    box-sizing border-box
    border .04rem solid transparent
    text-align center
    font-size 15px
    color #999
  }
  a.actives{
    color #f90
    border-bottom-color #f90
  }
}
.title{
  width 100%
  height 2.43rem
  border-top .03rem solid #eee
  background #fff
  padding-left .39rem
  padding-top .11rem
  box-sizing border-box
  .title-bot{
    display flex
    .discount{
      width 7.27rem
      padding-top .17rem
      .discount-top{
        margin-bottom .13rem
        li{
          padding 0 .15rem
          line-height .4rem
          background #ff9900
          color #fff
          font-size 14px
          text-align center
          float left
          margin-right .27rem
        }
      }
      .discount-bot{
        display flex
        justify-content space-around
        li{
          height .4rem
          line-height .4rem
          box-sizing border-box
          border .04rem solid #ff9900
          color #ff9900
          padding 0 .13rem
          font-size 12px
          letter-spacing -1px
        }
      }
    }
    .price{
      width 2.35rem
      height 1.37rem
      display flex
      flex-direction column
      justify-content space-evenly
      .hotprice{
        color #eb2222
        font-size 18px
      }
      .oriprice{
        color #999
        font-size 16px
      }
    }
  }
  .title-top{
    display flex
    .like{
      width 1.2rem
      text-align center
      height .93rem
      font-size 14px
      color #e71f19
      i{
        font-size 18px
      }
      h4{
        margin-top 4px
      }
    }
    h2{
      width 8.29rem
      height .93rem
      border-right 1px solid #eee
      font-size 17px
      line-height 19px
    }
  }
}
.top{
  width 100%
  height 7.24rem
  background skyblue
  .nav{
    div{
      width .75rem
      height .75rem
      line-height .75rem
      text-align center
      background #b2b2b2
      border-radius 50%
      position absolute
      top .11rem
      padding-top 2px
      box-sizing border-box
      color #fff
    }
    .back{
      left .31rem
    }
    .shops{
      right 1.61rem
    }
    .dot {
      right .37rem
    }
  }
}
.Detail{
  background #eee
  padding-bottom 1.33rem
}
</style>
