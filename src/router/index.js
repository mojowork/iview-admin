import Vue from 'vue'
import Router from 'vue-router'

// 布局页面
import Main from '@/views/Main'
import NotFound from '@/views/404'
import ServerErr from '@/views/500'
import Login from '@/views/Login'

// 业务页面
import Test from 'pages/Test'
import Dashboard from 'pages/Dashboard'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      hidden: true
    },
    {
      path: '/login',
      name: 'login',
      hidden: true,
      component: Login
    },
    {
      path: '/',
      title: '数据概览',
      name: 'data',
      icon: 'unlocked',
      component: Main,
      children: [
        { path: '/dashboard', title: '数据概览', name: 'dashboard',component: Dashboard },
      ]
    },
    {
      path: '/',
      title: '系统设置',
      name: 'setting',
      icon: 'ios-grid-view',
      component: Main,
      children: [
        { path: '/table', title: '可拖拽排序', name: 'dragable-table',component: Test },
        { path: '/image', title: '可缩放图片', name: 'dragable-image', component: Test },
      ]
    },
    {
      path: '/',
      title: '标签管理',
      name: 'tag',
      icon: 'ios-grid-view',
      component: Main,
      children: [
        { path: '/t', name: 't',  title: '测试页面',component: Test, }
      ]
    },
    {
      path: '/500',
      name: 'servererr',
      hidden: true,
      component: ServerErr
    },
    {
      path: '*',
      name: 'notfound',
      hidden: true,
      component: NotFound
    }
  ]
})
