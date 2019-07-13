<template>
  <div class='Index'>
    <div class="top">
      <div class="search">
        <input type="text" placeholder="Montagne jeunesse">
        <i class="icon-search iconfont searchIcon"></i>
      </div>
    </div>
    <Skeleton v-show='!result.length' v-for='(i,index) in 5' :key='index+100'></Skeleton>
    <dl v-for="(item,index) in result" :key='index'>
      <dt>
        <img :src="item.img.img" alt="">
        <h2>{{item.name}}</h2>
      </dt>
      <dd>
        <div class="father">
          <div class="itemBox" v-for="(lists,index) in item.list" :key='index' @click='skip(lists.id)'>
            <img :src="lists.thumbnail" alt="">
            <div class="bottom">
              <h2>{{lists.name}}</h2>
              <p><span>￥{{lists.reduct_price}}</span>&nbsp;&nbsp;￥{{lists.original_price}}</p>
            </div>
          </div>
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      stickList: [
        {img: require('@/assets/image/home/hot.png')},
        {img: require('@/assets/image/home/baby.png')},
        {img: require('@/assets/image/home/meizhuang.png')},
        {img: require('@/assets/image/home/furniture.png')},
        {img: require('@/assets/image/home/food.png')},
        {img: require('@/assets/image/home/airplane.png')},
      ],
      result: []
    }
  },
  methods: {
    skip (num) {
      this.$router.push('/detail/' + num)
    }
  },
  mounted () {
    this.$axios.get('/api/getIndexData').then(res => {
      setInterval(() => {
        this.result = res.data.data
        this.result.map((item,index)=>{
          item.img = this.stickList[index] // 将图片添加进得到的数组;
        })
      }, 1500)
    })
  }
}
</script>
<style lang='stylus' scoped>
// 使用插值
vendor(prop,args){
  -webkit-{prop} args
  -moz-{prop} args
  {prop} args
}

.top {
  height 6.95rem
  background url('../../../assets/image/home/banner.jpg') no-repeat
  background-size 100% 
  padding-top .88rem
  box-sizing border-box
  display flex
  justify-content center
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
dl {
  padding-left .25rem
  height 7.52rem
  dt{
    height 1.27rem
    display flex
    align-items center
    img{
      width .52rem
      height .53rem
      margin-right .27rem
      position relative
      top -0.03rem
    }
    h2{
      font-size 20px
    }
  }
  dd{
    width 100%
    height 6.25rem
    overflow auto
    .father {
      width 10000px
      .itemBox{
        width 4.39rem
        height 6.25rem
        box-sizing border-box
        border .03rem solid #efefef
        margin-right .31rem
        float left
        img{
          width 100%;
          height 4.37rem
        }
        .bottom{
          padding 0 .27rem
          h2{
            font-size 16px
            line-height 22px
            display:-webkit-box;    //旧版弹性盒子;
            -webkit-box-orient:vertical;    //项目往下排;
            -webkit-line-clamp:2;    //超出两行文本变点状;
            overflow:hidden;        //超出内容隐藏;
          }
          p{
            margin-top 3px
            font-size 16px
            span{
              color #ffa002
            }
          }
        }
      }
    }
  }
}
</style>
