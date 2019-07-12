<template>
  <div class='Detail'>
    <div class="top">
      <div class="nav">
        <div class="back"><i class="iconfont icon-left" @click='$router.go(-1)'></i></div>
        <div class="shops"><i class="iconfont icon-Cart" @click='$router.push("/home/cart")'></i></div>
        <div class="dot"><i class="iconfont icon-more2"></i></div>
      </div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in list.swiperImgArr" :key='index'>
          <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="title">
      <div class="title-top">
        <h2>{{list.name}}</h2>
        <div class="like">
          <i :class="['iconfont',{'icon-start':!like},{'icon-start1':like}]" @click='like=!like'></i>
          <h4>收藏</h4>
        </div>
      </div>
      <div class="title-bot">
        <div class="price">
          <h4 class="hotprice">￥{{list.reduct_price}}.00</h4>
          <del class="oriprice">￥{{list.original_price}}.00</del>
        </div>
        <div class="discount">
          <ul class="discount-top clearfix">
            <li>{{list.allowance | allow}}</li>
            <li>{{list.isFreeShip ? '包邮' : '含运费'}}</li>
          </ul>
          <ul class="discount-bot">
            <li v-for='(item,index) in list.describe' :key='index'>{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tab">
      <a href="javascript:;" :class="{'actives':deta}" @click='deta=true'>商品详情</a>
      <a href="javascript:;" :class="{'actives':!deta}" @click='deta=false'>买家口碑</a>
    </div>
    <!-- 详情图片 -->
    <div class="shopdetail" v-show='deta'>
      <img src="../../assets/image/detail/xiangqing.png" alt="">
    </div>
    <!-- 商家口碑 -->
    <div class="koubei" v-show='!deta'>
      <ul class="nav">
        <li @click="postName='all'" :class="{'bg':postName=='all'}">全部评价</li>
        <li @click="postName='good'" :class="{'bg':postName=='good'}">好评</li>
        <li @click="postName='bad'" :class="{'bg':postName=='bad'}">差评</li>
        <li @click="postName='postForm'" :class="{'bg':postName=='postForm'}">晒单</li>
      </ul>
      <ul class="cont">
        <li v-for="(item,index) in buylist[postName]" :key='index'>
          <p class="tit">
            <b>{{item.buyerName}}</b>
            <i>{{item.createTime | swichTime}}</i>
          </p>
          <ul class="img">
            <li v-for='(it,index) in item.postImg' :key='index'><img :src="it" alt=""></li>
          </ul>
          <p class="postdesc">{{item.postDescribe}}</p>
          <p class="admindesc">{{item.adminReviews}}</p>
        </li>
      </ul>
    </div>
    <div class="bottoms">
      <div class="bom-price">
        总价：<i>￥{{buy.num!==0 ? list.reduct_price*buy.num : 0}}.00</i>
      </div>
      <button class="add-shop" @click='startBuy'>加入购物车</button>
      <button class="fast-buy" @click='startBuy'>立即购买</button>
    </div>
    <transition enter-active-class='animated fadeInUp faster' leave-active-class='animated fadeOutDown faster'>
      <div class="shadowbom" v-show='sha' @click.self='sha=false'>
        <div class="main">
          <div class="header"><img :src="list.swiperImgArr[0]" alt="" v-if='list.swiperImgArr'></div>
          <i class="iconfont icon-delete close" @click='sha=false'></i>
          <div class="text">
            <p style="color:#eb2222">￥{{list.reduct_price}}.00</p>
            <p>库存{{list.total}}件</p>
            <p>请选择商品属性</p>
          </div>
          <div class="chnum clearfix">
            <h3>购买数量</h3>
            <div class="calcs">
              <button @click='buy.num--' :disabled='buy.num==0'>-</button><i>{{buy.num}}</i><button @click='buy.num++'>+</button>
            </div>
          </div>
          <dl class="clearfix" v-for='(item,index) in list.buySelect' :key='index'>
            <dt>{{item.name}}</dt>
            <dd v-for='(it,index) in item.list' :key='index' @click='buy.choose=it' :class="{'bg':buy.choose==it}">{{it}}</dd>
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
      like: false,  // 收藏按钮
      sha: false, // 点击购买跳出
      deta: true,  // tab切换
      list: '',  // 取到的数组
      buy: { // 购买选项
        num: 0, // 添加的数量
        choose: ''
      },
      postName: 'all',  // 评价专用
      buylist: '',
      swiperOption: {
        pagination:{
          el:'.swiper-pagination',
          clickable:true
        }
      }
    }
  },
  mounted () {
    let id = this.$route.params.id
    this.$axios.get('/api/getDetails?pid='+id).then(res => {
      this.list = res.data.data;
      this.buylist = this.list.buyerReviews  // 循环评价;
    })
  },
  methods: {
    add (result) {
      this.buy.choose = result
    },
    startBuy () {
      this.sha=true
      if(this.buy.num){
        let obj = {
          num: this.buy.num,
          cid: this.list.cid,
          name: this.list.name,
          img: this.list.swiperImgArr[0],
          sprice: Number(this.list.reduct_price),
          flag: true
        }
        this.$store.commit('setList', obj)
        // this.$router.push('/home/cart')
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
.bg{
  background #f90!important
}
.koubei{
  border-top .04rem solid #eee;
  padding 0 .4rem
  background #fff;
  .cont{
    border-bottom .04rem solid #eee
    padding-bottom .27rem
    .postdesc{
      font-size 16px
      color #999
      line-height 25px
    }
    .admindesc{
      width 100%
      line-height 20px
      display flex
      padding .16rem .13rem
      box-sizing border-box
      background #ddd
      color #666
      border-radius 8px
    }
    .img{
      display flex
      li{
        width 2.01rem
        height 2.01rem
        margin-right 10px;
        img{
          width 100%
        }
      }
    }
    .tit{
      font-size 16px
      color #f90
      line-height .83rem
      display flex
      justify-content space-between
      i{
        color #999
        font-size 15px
      }
    }
  }
  .nav{
    width 100%;
    height .93rem
    border-bottom .04rem solid #eee
    display flex
    justify-content space-between
    align-items center
    li{
      width 1.8rem
      height .67rem
      border-radius 10px
      background #999
      font-size 15px
      display grid
      place-items center
      color #fff
    }
  }
}
.shopdetail{
  img{
    width 100vw
  }
}
.shadowbom{
  width 100%
  height calc(100vh - 1.33rem)
  background #eee
  position fixed
  top 0
  background rgba(0,0,0,.3)
  z-index 9
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
      background #fff
      top -28px
      img{
        width 100%
      }
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
        display inline-grid
        grid-auto-flow column
        column-gap .27rem
        place-items start
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
  .swiper-wrapper{
    img{
      width 100vw
      height 7.24rem
    }
  }
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
      z-index 8
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
  height calc(100vh - 1.33rem)
  overflow auto
}
</style>
