/*
 * @Author: Vhen
 * @Date: 2020-11-13 11:27:40
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 15:38:04
 * @Description: 
 */

const host = process.env.NODE_ENV
const EVN = {
  development: 'dp_dev',
  testing: 'dp_test',
  production: 'dp_prod'
}
const rootDir = EVN[host]

const types = {
  TEST_METHOD: 'TEST_METHOD'
}

const state = {
  env: rootDir, // 环境变量
  test: 'test'
}

const mutations={
  [types.TEST_METHOD](state,params){
    state.test = params;
  }
}

const actions= {
  testFn({ commit }, params) {
   
    commit(types.TEST_METHOD, params);
  },
}

const getters = {
  env: state => state.sidebar,
  test: state => state.test,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
