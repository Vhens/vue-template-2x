/*
 * @Author: Vhen
 * @Date: 2020-11-13 15:39:32
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 16:15:11
 * @Description: http服务
 */

import axios from 'axios'

const http = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: {'isAjax': true}
})

/**
 * http request 拦截器
 */
http.interceptors.request.use(
  config => {
    return config
  },err=>{
    
  }
)

/**
 * http response 拦截器
 */
http.interceptors.response.use(response=> {
  return response.data 
},error=> {
  return Promise.reject(res) // 返回接口返回的错误信息
})

export default http