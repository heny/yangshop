<template>
  <div class='login'>
    <div class="top">
      <i class="icon-left iconfont" @click='$router.push("/home/mine")'></i>
      <h2>登录</h2>
      <router-link to="/register">注册</router-link>
    </div>
    <div class="bodys">
      <h2>手机号:</h2>
      <input type="text">
      <h2>密码:</h2>
      <input type="text">
      <p><router-link to="">忘记密码</router-link></p>
      <button>登录</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login'
}
</script>
<style lang="stylus" scoped>
.bodys{
  padding 2.53rem 1rem 0
  h2{
    font-size 22px
    margin-top .75rem
    width 2rem
  }
  input{
    width 100%
    height 1rem
    border .03rem solid
    border-color transparent transparent #a3a3a3 transparent
    font-size 18px
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
