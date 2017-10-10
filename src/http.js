import axios from 'axios'
// NProgress 进度条插件
import NProgress from 'nprogress'
var qs = require('qs')// qs.stringify(params)对提交json参数格式化a=212&b=2332的格式
import { MessageBox, Message } from 'element-ui'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
// 超时时间
axios.defaults.timeout = 500000
// http请求拦截器
axios.interceptors.request.use(config => {
    console.log('请求开始');
    return config
}, error => {
    console.log('请求失败');
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
    console.log('响应完成');
    return data
}, error => {
    console.log('响应失败');
    return Promise.reject(error)
})

export const jsonplaceholder = params => { // 驳回正文预览
    // let param = {json: JSON.stringify(params)}
    return axios.get(`http://jsonplaceholder.typicode.com/users`).then(res => res)
}


