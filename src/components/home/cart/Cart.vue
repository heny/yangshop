<template>
  <div class='cart'>
    <div class="top">
      <h2>购物车</h2>
      <i class="iconfont icon-left back"></i>
    </div>
    <div class="noneShop" v-if="!islogin">
      <div>
        <i class="icon-cart iconfont shops"></i>
        <p>购物车还是空的<br>快去逛逛吧~</p>
      </div>
    </div>
    <div class="shoped" v-if='islogin'>
      <ul>
        <li>
          <div class="title">
            <i class="icon-mendian iconfont shopIcon"></i>
            <span>杭州保税区仓</span>
          </div>
          <div class="main">
            <div class="chek"><input type="checkbox"></div>
            <div class="img"><img src="" alt=""></div>
            <div class="desc">
              <h2>ChildLife/童年时光婴幼童年时光婴幼童年时光婴幼</h2>
              <i @click='num-- && num>0'>-</i><i class="center">{{num}}</i><i @click='num++'>+</i>
            </div>
            <div class="price">￥118</div>
          </div>
        </li>
        <li>
          <div class="title">
            <i class="icon-mendian iconfont shopIcon"></i>
            <span>杭州保税区仓</span>
          </div>
          <div class="main">
            <div class="chek"><input type="checkbox"></div>
            <div class="img"><img src="" alt=""></div>
            <div class="desc">
              <h2>ChildLife/童年时光婴幼童年时光婴幼童年时光婴幼</h2>
              <i @click='num-- && num>0'>-</i><i class="center">{{num}}</i><i @click='num++'>+</i>
            </div>
            <div class="price">￥118</div>
          </div>
        </li>
      </ul>
      <div class="bottoms">
        <div class="chekAll">
          <input type="checkbox" name="all" id="">
          <p>全选</p>
        </div>
        <div class="chekAll">
          <input type="checkbox" name="edit" id="">
          <p>编辑</p>
        </div>
        <div class="priceAll">
          <p>合计:118.00</p>
          <p>(不含运费)</p>
        </div>
        <button>去结算</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cart',
  data () {
    return {
      islogin: true,
      num: 1
    }
  }
}
</script>
<style lang="stylus" scoped>
.top{
  width 100%
  height 1.88rem
  background #ff9900
  h2{
    text-align center
    line-height 1.88rem
    font-size 24px
    color #fff
  }
  .back{
    position absolute
    top 26px
    left .53rem
    color #fff
    font-size 18px
  }
}
.noneShop {
  color #666666
  text-align center
  div{
    padding-top 4.47rem
  }
  .shops{
    font-size 1.27rem
  }
  p{
    margin-top .53rem
    font-size .64rem
    line-height 30px
  }
}
.shoped {
  .bottoms{
    height 1.49rem
    width 100%
    border-top .04rem solid #eee
    position fixed
    bottom 1.33rem
    display flex
    .chekAll{
      width 1.68rem
      box-sizing border-box
      padding-top .21rem
      text-align center
      font-size .35rem
      input{
        width .56rem
        height .56rem
        margin-bottom .11rem
        &[name='all']{
          background url('../../../assets/image/home/radio_nor.png') no-repeat
          &:checked{
            background url('../../../assets/image/home/radio_hig.png') no-repeat
          }
        }
        &[name='edit']{
          margin-bottom 4px
          background url('../../../assets/image/home/editor_nor.png') no-repeat
          &:checked{
            background url('../../../assets/image/home/editor_hig.png') no-repeat
          }
        }
      }
    }
    .priceAll{
      width 3.55rem
      padding-left .28rem
      box-sizing border-box
      color #999
      text-align center
      padding-top .35rem
      line-height .4rem
      font-size .37rem
    }
    button{
      width 3.09rem
      height 100%
      color #fff
      background #ff5500
      font-size .45rem
    }
  }
  ul {
    li{
      width 100%
      height 4.37rem
      padding-left .51rem
      padding-top .16rem
      .title{
        display inline-block
        width 100%
        height 1.41rem
        padding-left .27rem
        padding-top .31rem
        color #999999
        box-sizing border-box
        .shopIcon{
          font-size 20px
          margin-right .36rem
        }
        span {
          font-size 20px
        }
      }
      .main{
        display flex
        height 2.9rem
        .chek{
          width 1.11rem
          padding-top .77rem
          padding-left .27rem
          box-sizing border-box
          input{
            width 20px
            height 20px
            background url('../../../assets/image/home/radio_nor.png') no-repeat
            &:checked{
              background url('../../../assets/image/home/radio_hig.png') no-repeat
            }
          }
        }
        .img{
          width 2.09rem
          padding-top .03rem
          box-sizing border-box
          margin-right .28rem
          background red
        }
        img{
          width 2.09rem
          height 2.09rem
        }
        .desc{
          width 3.89rem
          h2{
            font-size .4rem
            line-height .53rem
            margin-bottom .39rem
            display:-webkit-box;    //旧版弹性盒子;
            -webkit-box-orient:vertical;    //项目往下排;
            -webkit-line-clamp:2;    //超出两行文本变点状;
            overflow:hidden;        //超出内容隐藏;
          }
          i{
            width 1rem
            line-height .55rem
            border .04rem solid #ccc
            color #666
            text-align center
            font-size 22px
            display inline-block
          }
          .center{
            border-left none;
            border-right none
          }
        }
        .price{
          padding .83rem 0 0 .2rem
          font-size 20px
        }
      }
    }
    li:nth-child(odd){
      background #fafafa
    }
    li:nth-child(even){
      background #f7f7f7
    }
  }
}
</style>
