/*
 * @Author: Vhen
 * @Date: 2020-11-13 11:27:40
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 13:35:48
 * @Description:  注册模块
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
   modules
})

export default store
