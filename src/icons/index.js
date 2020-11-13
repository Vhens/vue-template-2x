/*
 * @Author: Vhen
 * @Date: 2020-11-13 11:53:38
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 15:01:08
 * @Description: 
 */

 /*
 * @Author: Vhen
 * @Date: 2020-10-13 14:41:33
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-13 14:57:27
 * @Description:
 */
import Vue from 'vue'

import SvgIcon from './components/svg-icon'

Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
