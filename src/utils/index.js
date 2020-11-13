/*
 * @Description: 公共工具类
 * @Author: Vhen
 * @Date: 2019-05-06 17:35:19
 * @LastEditTime: 2020-11-13 15:02:20
 */
const requireModule = require.context('./', false, /\.js$/);
const modules = {};
requireModule.keys().forEach((fileName) => {
  const moduleName = fileName.replace(/(\.\/|\.js)/g, '');
  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default
  };
});

export const utils = modules;
