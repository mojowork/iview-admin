// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import router from './router'
import store from './store'
import 'iview/dist/styles/iview.css'
import http from './utils/request'
import Cookies from 'js-cookie'

Vue.use(iView)

Vue.prototype.$http = http.post

// 路由拦截逻辑
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    // 没有token,跳转 login 页面
    if (!Cookies.get('token') && to.name !== 'login') {
        next('/login');

        // 存在token,跳过 login 页面，直接跳首页
    } else if (Cookies.get('token') && to.name === 'login') {
        next('/');

    } else {
        next()
    }
})

router.afterEach(route => {
    iView.LoadingBar.finish()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
