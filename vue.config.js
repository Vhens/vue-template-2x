/*
 * @Author: Vhen
 * @Date: 2020-11-13 11:43:29
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 16:05:39
 * @Description:
 */
const path = require('path')

const plugins = require('./config/plugins')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 9520

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    disableHostCheck: true,
    proxy: {
      '/*': {
        target: process.env.VUE_APP_URL, //请求的目标地址 process.env.VUE_APP_URL
        changeOrigin: true,
        ws: false,
        secure: false,
        logLevel: 'debug',
        pathRewrite: {},
      },
    },
    // before: require('./mock/index.js')
  },
  configureWebpack: {
    name: 'pageTitle',
    resolve: {
      modules: [
        // 优化模块查找路径
        path.resolve('src'),
        path.resolve('node_modules'), // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
      ],
    },
    plugins: plugins,
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial',
      },
    ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()

    /* 添加分析工具*/
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        .end()
      config.plugins.delete('prefetch')
    }
  },
}
