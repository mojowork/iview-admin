import Vue from 'vue'
import Router from 'vue-router'

// 布局页面
import Main from '@/views/Main'
import NotFound from '@/views/404'
import ServerErr from '@/views/500'
import Login from '@/views/Login'

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
      meta: { title: '登录' },
      hidden: true,
      component: Login
    },
    {
      path: '/',
      meta: { title: '数据概览' },
      name: 'data',
      icon: 'stats-bars',
      component: Main,
      children: [
        { path: '/dashboard', meta: { title: '仪表盘', }, name: 'dashboard', component: () => import('pages/Dashboard') },
      ]
    },
    {
      path: '/',
      meta: { title: '标签管理' },
      name: 'tag',
      icon: 'pricetags',
      component: Main,
      children: [
        { path: '/table', meta: { title: '可编辑表格', }, name: 'dragable-table', component: () => import('pages/Table') },
        { path: '/t', meta: { title: '测试页面', }, name: 't', component: () => import('pages/Test') }
      ]
    },
    {
      path: '/',
      meta: { title: '系统设置' },
      name: 'settings',
      icon: 'settings',
      component: Main,
      children: [
        { path: '/image', meta: { title: '可缩放图片', }, name: 'dragable-image', component: () => import('pages/Test') },
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
