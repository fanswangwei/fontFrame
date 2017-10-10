// 引入组件
// import Test from "./components/test"
// import User from "./components/user"
const index = resolve => require(['./components/index.vue'], resolve);
const main = resolve => require(['./components/main.vue'], resolve);
const tab0 = resolve => require(['./components/tab0.vue'], resolve);
const tab11 = resolve => require(['./components/tab11.vue'], resolve);
const tab12 = resolve => require(['./components/tab12.vue'], resolve);
// 配置路由
let routes = [
    {
        path: '/',
        component: index,
        name: '主页',
        iconCls: 'el-icon-star-off',
        hidden: false
    },
    {
        path: '/tab0',
        component: tab0,
        name: 'tab0',
        iconCls: 'el-icon-menu',
        hidden: false
    },
    {
        path: '/tab1',
        component: main,
        name: 'tab1',
        iconCls: 'el-icon-setting',
        children: [
            { path: '/tab11', component: tab11, name: 'tab11'},
            { path: '/tab12', component: tab12, name: 'tab12'}
        ]
    }
]
export default routes
