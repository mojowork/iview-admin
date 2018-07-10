import Vue from 'vue'
import Router from 'vue-router'

// 布局页面
import Main from '@/views/Main'
import NotFound from '@/views/404'
// import Login from '@/views/Login'
// import ServerErr from '@/views/500'

// 业务页面
import Test from 'pages/Test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/t',
      hidden: true
    },
    {
      path: '/',
      title: '数据概览',
      name: 'data',
      icon: 'unlocked',
      component: Main,
      children: [
        { path: '/dashborad', title: '数据概览', name: 'dashborad',component: Test },
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
      path: '*',
      name: 'notfound',
      hidden: true,
      component: NotFound
    }
  ]
})
