/*
 * @Author: Vhen
 * @Date: 2020-11-13 11:26:04
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 15:17:25
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const constantRoutes = [
  {
    path: '/test',
    component: ()=> import('views/test')
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router