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
      redirect: '/t'
    },
    {
      path: '/',
      name: '测试',
      component: Main,
      children: [
        {
          path: '/t', name: 't', component: Test,
        }
      ]
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
