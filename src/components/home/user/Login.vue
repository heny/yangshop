<template>
  <div class='login'>
    <div class="top">
      <i class="icon-left iconfont" @click='$router.push("/home/mine")'></i>
      <h2>登录</h2>
      <router-link to="/register">注册</router-link>
    </div>
    <div class="bodys">
      <h2>手机号: <i class="regs">{{phonemsg}}</i></h2>
      <input type="text" v-model='phone' @focus='phonemsg =""'>
      <h2>密码: <i class="regs">{{passmsg}}</i></h2>
      <input type="password" v-model='pass' @focus='passmsg =""'>
      <p><router-link to="">忘记密码</router-link></p>
      <button @click='goShop'>登录</button>
    </div>
    <Loading :title='title' v-show='loadding'></Loading>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'login',
  data () {
    return {
      phone: '',
      pass: '',
      phonemsg: '',
      passmsg: '',
      loadding: false,
      timer: null,
      title: '请求中'
    }
  },
  methods: {
    goShop () {
      this.loadding = true
      let figurenum=20;
      let indexnum = 0;
      this.title = '请求中'
      this.timer = setInterval(()=>{
        figurenum--
        indexnum++
        this.title = this.title+'.'
        if(indexnum > 6){
          this.title = '请求中'
          indexnum = 0
        }
        if(figurenum <= 0){
          clearInterval(this.timer)
          Toast({
            message: '请求超时',
            duration: 3000,
            iconClass: 'iconfont icon-d'
          })
          this.loadding = false
        }
      },500)
      this.$axios.get('/api/login',{params:{
        phone: this.phone,
        password: this.pass
      }}).then(res => {
        this.loadding = false  // 关闭loadding
        clearInterval(this.timer)  // 清除定时器
        if(res.data.status === 0){
          if(res.data.msg.includes('密码')){
            this.passmsg = res.data.msg
          } else if(res.data.msg.includes('注册')){
            this.phonemsg = res.data.msg
          }
        } else if (res.data.status === 1){
          Toast({
            message: '登录成功',
            iconClass: 'icon-success1f iconfont'
          })
          this.passmsg = ''
          localStorage.user = this.phone
          this.$router.push('/home/mine')
        }else{
          Toast({
            message: '现在还不能点击哦',
            duration: 3000,
            iconClass: 'iconfont icon-delete'
          })
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.loading{
  position fixed
  top 50%
  left 50%
  transform translate(-50%,-50%)
  z-index 9999
  font-size 18px
  width 4rem
  height 3.5rem
  border-radius 8px
  border 2px solid #ccc
  display grid
  place-items center
  background rgba(0,0,0,.5)
}
.regs {
  color red
}
.bodys{
  padding 2.53rem 1rem 0
  h2{
    font-size 22px
    margin-top .75rem
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
