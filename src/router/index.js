import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import Index from '../components/home/index/Index'
import Cate from '../components/home/cate/Cate'
import Cart from '../components/home/cart/Cart'
import Mine from '../components/home/mine/Mine'
import Login from '../components/home/user/Login'
import Register from '../components/home/user/Register'
import Detail from '../components/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/index'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        { path: 'index', component: Index },
        { path: 'cate', component: Cate },
        { path: 'cart', component: Cart },
        { path: 'mine', component: Mine }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
