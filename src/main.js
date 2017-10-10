// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import App from './App'

// 使用
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueResource)

Vue.config.productionTip = false
// 设置路由
const router = new VueRouter({
    mode:'history',
    routes: routes
})
/* eslint-disable no-new */
new Vue({
    router,
    template: `<App/>`,
    components: { App }
}).$mount('#app')
