import Vue from 'vue'
import VueRouter from 'vue-router'
import Manage from '../views/Manage.vue'
import Login from '../views/Login.vue'
import test from '../views/test.vue'
import index from '../views/Index.vue'
import store from "@/store";
import UserHomePage from "@/views/userPages/UserHomePage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    component: Manage,
    redirect: '/admin/home',
    children:[
      {path: 'home',name: '管理员首页',component:() =>import('../views/Home')},
      {path:'student',name:'用户管理',component:() => import('../views/adminPages/adminStudent')},
      {path:'feedBack',name:'意见反馈',component:() => import('../views/adminPages/adminFeedBack')},
      {path:'offerAdvice',name:'建言献策',component:() => import('../views/adminPages/adminOfferAdvice')},
      {path: 'newsUpload',name: '新闻上传',component:() =>import('../views/adminPages/adminNewsUpload')},
    ]
  },
  {
    path: '/userHomePage',
    component: UserHomePage,
    redirect:'/userHomePage/homePage',
    children: [
      {path: 'homePage',name:'学生首页',component:() => import('../views/userPages/HomePage')},
      {path:'newsInformation',name:'新闻动态',component:() => import('../views/userPages/NewsInformation')},
      {path: 'unitedFrontKnowledge',name:'统战知识',component:() => import('../views/userPages/UnitedFrontKnowledge')},
      {path: 'offerAdvice',name:'建言献策',component:() => import('../views/userPages/OfferAdvice')},
      {path: 'feedBack',name:'意见反馈',component:() => import('../views/userPages/FeedBack')},
      {path: 'newsPage',name:'新闻内容',component:() => import('../views/userPages/NewsPage')},
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'index',
    component: index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  localStorage.setItem("currentPathName", to.name)  // 设置当前的路由名称，为了在Header组件中去使用
  store.commit("setPath")  // 触发store的数据更新
  next()  // 放行路由
})
export default router
