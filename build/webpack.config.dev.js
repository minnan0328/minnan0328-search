process.env.NODE_ENV = 'development'

const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const notifier = require('node-notifier')
const packageConfig = require('../package.json')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'warning', //當使用 inline mode ，在 server 或 HotModuleReplacementPlugin 重新啟動時，瀏覽器控制台只顯示錯誤警告
    historyApiFallback: {
      //當使用 HTML5 History API 時，任何的 404 回應 都可能被替代 index.html
      rewrites: [
        {
          from: /.*/,
          to: path.posix.join(config.dev.assetsPublicPath, 'index.html'),
        },
      ],
    },
    hot: true, //啟用文件更動即時更新
    contentBase: false, //使用 CopyWebpackPlugin 來指定靜態來源目錄
    compress: true, //啟用 gzip 壓縮
    host: config.dev.host,
    port: config.dev.port,
    open: config.dev.isOpenBrowser ? 'Google Chrome' : config.dev.isOpenBrowser,
    overlay: { warnings: false, errors: true }, //全屏顯示編譯錯誤時畫面訊息，不顯示警告訊息
    proxy: config.dev.proxyTable, //使用代理至webpack.config.js -> proxyTable 設定
    quiet: true, //true，終端機只出現啟動資訊，webpack的警告和編譯訊息不會顯示
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true, //默認值為true，script 標籤位於 html 文件的 body 底部
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*'],
      },
    ]),
    new VueLoaderPlugin(),
  ],
});

portfinder.basePort = process.env.PORT || config.dev.port
module.exports = portfinder.getPortPromise().then(port => {
	process.env.PORT = port
	devWebpackConfig.devServer.port = port
	devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
		compilationSuccessInfo: { messages: [`http://${devWebpackConfig.devServer.host}:${port}`]},
		onErrors: (severity, errors) => {
			if (severity !== 'error') return
			notifier.notify({
				title: `Webpack Config Error : ${packageConfig.name}`,
				message: `${severity} : ${errors[0].name}`,
				subtitle: errors[0].file && errors[0].file.split('!').pop() || ''
			})
		}
	}))
	return devWebpackConfig
}).catch(error => { return console.log('Webpack Config Error', error) })