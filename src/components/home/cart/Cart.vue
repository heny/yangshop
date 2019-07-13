<template>
  <div class='cart'>
    <div class="top">
      <h2>购物车</h2>
      <i class="iconfont icon-left back" @click="$router.go(-1)"></i>
    </div>
    <div class="noneShop" v-if="!islogin">
      <div>
        <i class="icon-cart iconfont shops"></i>
        <p v-html="msg"></p>
      </div>
    </div>
    <div class="shoped" v-if='islogin'>
      <ul>
        <li v-for="(item,index) in list" :key='index'>
          <div class="title">
            <i class="icon-mendian iconfont shopIcon"></i>
            <span>杭州保税区仓</span>
          </div>
          <div class="main">
            <div class="chek" v-show='!edit'><input type="checkbox" v-model='item.flag'></div>
            <div class="img"><img :src="item.img" alt="" @click='$router.push("/detail/"+item.pid)'></div>
            <div class="desc">
              <h2>{{item.name}}</h2>
              <button @click='item.num-- && item.num>0' :disabled='item.num==0'>-</button><i class="center">{{item.num}}</i><button @click='item.num++'>+</button>
            </div>
            <div class="price">￥{{item.sprice*item.num}}</div>
            <transition enter-active-class="animated fadeInRight faster" leave-active-class="animated fadeOutRight faster">
              <div class="btn" v-show='edit' @click='del(item.cid)'>删除</div>
            </transition>
          </div>
        </li>
      </ul>
      <div class="bottoms">
        <div class="chekAll">
          <input type="checkbox" name="all" id="" v-model='chekAll' @click='cAll'>
          <p>全选</p>
        </div>
        <div class="chekAll">
          <input type="checkbox" name="edit" id="" v-model='edit'>
          <p>编辑</p>
        </div>
        <div class="priceAll">
          <p>合计:{{priceAll}}.00</p>
          <p>(不含运费)</p>
        </div>
        <button @click='figure'>去结算</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'Cart',
  data () {
    return {
      islogin: false,
      edit: false,
      list: '',
      priceAll: 0,
      chekAll: true,
      msg: ''
    }
  },
  mounted () {
    // 判断有没有登录
    if(localStorage.user){
      this.islogin = true
      // 判断购物车有没有东西;
      if(localStorage.list && localStorage.list !== '[]'){
        this.list = JSON.parse(localStorage.list)
      } else {
        this.msg = '购物车还是空的<br>快去逛逛吧~'
        this.islogin = false
      }
    } else {
      this.msg = '您还没有登录的呢<br>快去登录吧~'
    }
  },
  watch: {
    list: {
      deep: true,
      handler(val){
        let arr = val.filter(item=>item.flag) // 将false的过滤掉
        // 计算总价
        let num = 0
        arr.forEach((item,index)=>{
          num += item.num*item.sprice
        })
        this.priceAll = num
        
        this.chekAll = arr.length === val.length // 当true的长度相当时，则全选亮
        // 改变本地存储的值
        this.$nextTick(()=>{
          localStorage.list = JSON.stringify(val)
        })
      }
    }
  },
  methods: {
    del (cid) {
      // 调用删除方法
      this.$store.commit('delList', cid)
      // 实时更新;
      this.list.map((item,index) => {
        if(item.cid === cid){
          this.list.splice(index,1)
        }
      })
      // 判断localStorage里面是否有数据;
      if(localStorage.list === '[]'){
        this.islogin = false
        this.msg = '购物车还是空的<br>快去逛逛吧~'
      }
    },
    cAll () {
      // 因为直接等于会发生改变，所以需要取反;
      this.chekAll = !this.chekAll
      this.list.map(item=>item.flag = this.chekAll)
    },
    figure () {
      Toast({
        message: '操作成功',
        iconClass: 'icon-success1f iconfont'
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.cart{
  width 100vw
  overflow hidden
}
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
    background #fff
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
        transition .5s
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
          button,i{
            width 1rem
            line-height .55rem
            border .04rem solid #ccc
            color #666
            text-align center
            font-size 22px
            display inline-block
            background #fff
            padding 3px 0
          }
          .center{
            border-left none;
            border-right none
          }
        }
        .price{
          padding .83rem 0 0 .2rem
          font-size 20px
          width .7rem*2
        }
        .btn{
          width 1.31rem
          height 100%
          background #f90
          color #fff
          margin-left .33rem
          font-size 20px
          display grid
          place-items center
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
