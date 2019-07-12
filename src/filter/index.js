import Vue from 'vue'

// 过滤折扣
Vue.filter('allow', val => Number(val*10).toFixed(1))

// 过滤时间
Vue.filter('swichTime', val => {
  let time = new Date(Number(val))
  let Y = time.getFullYear()
  let M = time.getMonth() + 1
  let D = time.getDate()
  let h = time.getHours()
  let m = time.getMinutes()
  let s = time.getSeconds()
  return `${Y}-${M}-${D} ${h}:${m}:${s}`
})