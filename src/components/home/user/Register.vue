<template>
  <div class='login'>
    <div class="top">
      <i class="icon-left iconfont" @click='$router.push("/home/mine")'></i>
      <h2>注册</h2>
      <router-link to="/login">登录</router-link>
    </div>
    <div class="body">
      <h2>手机号:</h2>
      <input type="text">
      <h2>密&nbsp;&nbsp;&nbsp;码:</h2>
      <input type="text">
      <h2>验证码: <a href="javascript:;" class="code">点击获取</a></h2>
      <input type="text">
      <button>下一步</button>
      <label>
        <i :class="[{'icon-check-box':!check},{'icon-jd-check':check},'iconfont']" @click='check=!check'></i>
        我已阅读并同意使用<router-link to="">条款和隐私政策</router-link>
        <input type="checkbox" v-model='check'>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      check: true
    }
  }
}
</script>
<style lang="stylus" scoped>
.body{
  padding 1.51rem 1rem 0
  h2{
    font-size 22px
    margin-top .75rem
    position relative
    .code{
      font-size 20px
      position absolute
      right 0
      color #fe0041
    }
  }
  input[type='text']{
    width 100%
    height 1rem
    border .03rem solid
    border-color transparent transparent #a3a3a3 transparent
    font-size 18px
  }
  label{
    font-size 15px
    color #666
    i{
      font-size 22px
      color #ff9900
    }
    a{
      color #333
    }
  }
  p{
    line-height 1.12rem
    margin-top .19rem
    text-align right
    padding-right .25rem
    a{
      color #666
      font-size 20px
    }
  }
  button{
    margin .65rem 0
    height 1.33rem
    background #ff9900
    width 100%
    color #fff
    font-size 22px
    border-radius .13rem
  }
}
.top{
  width 100%
  height 1.88rem
  display flex
  justify-content space-between
  background #ff9900
  box-sizing border-box
  font-size 21px
  padding .90rem .37rem 0 .45rem
  color #fff
  i{
    font-size 22px
  }
  a{
    color #fff
  }
}
</style>
