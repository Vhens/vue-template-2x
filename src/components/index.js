/*
 * @Description: 动态注册组件
 * @Author: Vhen
 * @Date: 2019-02-22 09:53:21
 * @LastEditTime: 2020-11-13 15:24:47
 */
/* eslint-disable */
const firstUpperCase = ([first, ...res]) => first.toUpperCase() + res.join('');

const humpType = str => str.replace(/\-[a-z]/g, (a, b) => (b === 0 ? a.replace('-', '') : a.replace(
  '-', '').toUpperCase()));

export const component = {
  install: (Vue) => {
    const requireComponent = require.context('../components', true, /\.vue$/);

    requireComponent.keys().forEach((fileName) => {
      const componentConfig = requireComponent(fileName);
      const arrStr = fileName.split('/');
      const fileStr = humpType(arrStr[1]);
      const componentName = `v${firstUpperCase(fileStr)}`;
      Vue.component(componentName, componentConfig.default || componentConfig);
    });
  },
};
