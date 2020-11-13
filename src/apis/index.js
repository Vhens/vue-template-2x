/*
 * @Author: Vhen
 * @Date: 2020-11-13 15:49:59
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 15:50:41
 * @Description: 
 */

import http from '../http'
import {
  apis
} from './Interface'

export const $apis = {
  install: function (Vue) {
    Vue.prototype.$apis = this
  }
}

/***
 * 对apis中的路径转化为请求对象
 * param name=params type=object 发送参数
 * param name=path type=array 路径，会逐个以/为分隔符添加到请求路径后
 */
apis.forEach(v => {
  let withToken = v.withToken;
  if (!v.desc) {
    new Error('your method don\'t have description')
  }
  if (v.method === 'post' || !v.method) {
    $apis[v.name] = (params, path) => {
      if (Array.isArray(params)) {
        return http.post(v.path, params)
      } else {
        let newTemp = Object.assign({
          withToken
        }, params, {
          t: +new Date()
        })
        let temp = ''
        if (path) {
          path.forEach(val => {
            temp += `/${val}`
          })
        }
        return http.post(v.path + temp, newTemp)
      }

    }
  } else {
    $apis[v.name] = (params, path) => {
      let newTemp = Object.assign({
        withToken
      }, params, {
        t: +new Date()
      })
      let temp = ''
      if (path) {
        path.forEach(val => {
          temp += `/${val}`
        })
      }
      return http.get(v.path + temp, {
        newTemp
      })
    }
  }
});

