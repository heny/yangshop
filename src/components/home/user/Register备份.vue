<template>
  <div class='login'>
    <div class="top">
      <i class="icon-left iconfont" @click='$router.push("/home/mine")'></i>
      <h2>注册</h2>
      <router-link to="/login">登录</router-link>
    </div>
    <div class="body">
      <h2>手机号:<i class="reg">{{phoneregs ? '' : '手机号输入不正确'}}</i></h2>
      <input type="number" v-model.number='phone' @blur='regPhone' placeholder="请输入正确的手机号码">
      <h2>密&nbsp;&nbsp;&nbsp;码:<i class='reg'>{{passregs ? '' : '密码输入不正确'}}</i></h2>
      <input type="password" placeholder="密码必须为6-20字母大小写数字组合" v-model='pass' @blur='regPass'>
      <h2>验证码: <a href="javascript:;" class="code" @click='getCode'>{{'点击获取'}}</a></h2>
      <input type="text">
      <button @click='nextlogin'>下一步</button>
      <label>
        <i :class="[{'icon-check-box':!check},{'icon-jd-check':check},'iconfont']" @click='check=!check'></i>
        我已阅读并同意使用<router-link to="">条款和隐私政策</router-link>
        <input type="checkbox" v-model='check'>
      </label>
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
      check: true,
      phone: '',
      pass: '',
      phoneregs: true,
      passregs: true,
      loadding: false, // 请求加载
      timer: null,
      title: '请求中'
      // timerCode: null,   // 开启短信验证码倒计时
      // timerCodes: 5 // 倒计时数量
    }
  },
  methods: {
    nextlogin () {
      this.loadding = true
      let figurenum=20;
      let indexnum = 0;   // 请求数据中
      this.title = '请求中' // 请求数据中
      this.timer = setInterval(()=>{
        figurenum--
        // 请求数据中
        indexnum++
        this.title = this.title+'.'
        if(indexnum > 6){
          this.title = '请求中'
          indexnum = 0
        }
        // 判断超时
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
      let params = this.$qs.stringify({
        phone: this.phone,
        password: this.pass
      })
      this.$axios.post('/api/register',params).then(res => {
        this.loadding = false
        clearInterval(this.timer)
        let msg = res.data.msg
        // 验证是否全部正确
        let arr = []
        for(let i in this.$data){
          arr.push(this.$data[i])
        }
        let bool = arr.filter(item=>Boolean(item))
        // 如果5个全部正确
        if(bool.length >= 7){
          // 判断服务器返回数据是否已经注册;
          if(msg.includes('已注册')){
            Toast({
              message: msg,
              duration: 5000,
              iconClass: 'icon-d iconfont'
            })
            return false
          }
          // 注册成功.....
          Toast({
            message: msg,
            duration: 5000,
            iconClass: 'iconfont icon-biaoqing'
          })
          // 跳转路由
          this.$router.push('/login')
        } else {
          Toast({
            message: '现在不能点击哦',
            duration: 3000,
            iconClass: 'iconfont icon-delete'
          })
        }
      })
    },
    regPhone (e) {
      let reg = /^1\d{10}$/
      // 二次点击绑定事件
      e.target.addEventListener('keyup',()=>{
        this.phoneregs = reg.test(this.phone)
      })
      // 判断失焦
      this.phoneregs = reg.test(this.phone)
    },
    regPass (e) {
      let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/
      e.target.addEventListener('keyup',()=>{
        this.passregs = reg.test(this.pass)
      })
      // 判断失焦
      this.passregs = reg.test(this.pass)
    },
    getCode () {
      let arr = []
      for(let i in this.$data){
        arr.push(this.$data[i])
      }
      let bool = arr.filter(item=>Boolean(item))
      console.log(bool)
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
.reg{
  color red
  margin-left 10px
}
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
  input:not([type='checkbox']){
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
