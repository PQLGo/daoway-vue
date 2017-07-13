import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home/home.vue'
import switchCity from '../components/switchCity/switchCity.vue'
import downloadApp from '../components/downloadApp/downloadApp.vue'
import serverSeller from '../components/serverSeller/serverSeller.vue'
import businessSettled from '../components/businessSettled/businessSettled.vue'
import businessView from '../components/businessView/businessView.vue'
import sellerIntroduction from '../components/sellerIntroduction/sellerIntroduction.vue'
import login from '../components/login/login.vue'
import aboutUs from '../components/aboutUs/aboutUs.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    //主页
    {
      path: '/home',
      component: home
    },
    //选择城市
    {
      path: '/switchCity',
      component: switchCity
    },
    //下载APP
    {
      path: '/downloadApp',
      component: downloadApp
    },
    //服务商列表
    {
      path: '/serverSeller',
      component: serverSeller
    },
    //加入我们
    {
      path: '/businessSettled',
      component: businessSettled
    },
    //关于我们
    {
      path: '/aboutUs',
      component: aboutUs
    },
    //商家评论
    {
      path: '/businessView',
      component: businessView
    },
  // 商家详情介绍
    {
      path:'/sellerIntroduction',
      component: sellerIntroduction
    },
    {
      path:'/login',
      component: login
    }
    
  ]
})
