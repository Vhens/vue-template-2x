/*
 * @Author: Vhen
 * @Date: 2020-11-13 11:51:22
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 11:52:23
 * @Description:  插件模块
 */
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')

module.exports=[
  new HtmlWebpackTagsPlugin({
    links: [],
    scripts: [
      // {
      //   path: 'https://cdn.jsdelivr.net/npm/vue',
      //   external: {
      //     packageName: 'vue',
      //     variableName: 'Vue',
      //   },
      // },
    ],
    publicPath: false,
  }),
]