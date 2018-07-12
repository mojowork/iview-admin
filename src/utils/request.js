/**
 *  对axios进行封装
 */

import axios from 'axios'
import Cookies from 'js-cookie'
import { Message } from 'iview'
import qs from 'qs'


const http = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 30000
})

// request拦截器
http.interceptors.request.use(req => {
    var token = Cookies.get('token')
    // req.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if (token) req.data['token'] = token
    req.data = qs.stringify(req.data)
    return req
}, error => {
    return Promise.reject(error)
})

// respone拦截器
http.interceptors.response.use(
    response => {
        var result = response.data
        if (+result.code < 0) {
            Message.error(result.msg)
            return Promise.reject(result.data)
        } else {
            Message.success(result.msg)
            return Promise.resolve(result.data)
        }
    },
    error => {
        Message.error(error.message)
        return Promise.reject(error)
    }
);

export default http
