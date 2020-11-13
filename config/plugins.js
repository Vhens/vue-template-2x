/*
 * @Author: Vhen
 * @Date: 2020-11-13 11:51:22
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 17:28:15
 * @Description:  插件模块
 */
const path = require('path')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = [
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

  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.join(__dirname, '../doc/test.txt'),
        to: path.join(__dirname, '../dist/'),
      },
    ],
  }),
]
