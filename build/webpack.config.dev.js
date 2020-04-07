process.env.NODE_ENV = 'development'

const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('./webpack.config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const notifier = require('node-notifier')
const packageConfig = require('../package.json')

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		clientLogLevel: 'warning',
		historyApiFallback: {
			rewrites: [{
				from: /.*/,
				to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
			},],
		},
		hot: true,
		compress: true,
		host: config.dev.host,
		port: config.dev.port,
		open: config.dev.isOpenBrowser ? 'Google Chrome' : config.dev.isOpenBrowser,
		//編譯錯誤時畫面顯示警告
		overlay: { warnings: false, errors: true },
		publicPath: config.dev.assetsPublicPath,
		//使用代理至webpack.config.js -> proxyTable 設定
		proxy: config.dev.proxyTable,
		//出現警告時，控制台不會出現錯誤
		quiet: true,
		//取得文件更動通知
		watchOptions: {
			poll: true
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true, //默認值為true，script 標籤位於 html 文件的 body 底部
		}),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, '../static'),
			to: config.dev.assetsSubDirectory,
			ignore: ['.*']
		}]),
		new VueLoaderPlugin()
	]
})

portfinder.basePort = process.env.PORT || config.dev.port
module.exports = portfinder.getPortPromise().then(port => {
	process.env.PORT, devWebpackConfig.devServer.port = port
	devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
		compilationSuccessInfo: { messages: [`http://${devWebpackConfig.devServer.host}:${port}`]},
		onErrors: (severity, errors) => {
			if (severity !== 'error') return
			notifier.notify({
				title: `WebpackConfig Error : ${packageConfig.name}`,
				message: `${severity} : ${errors[0].name}`,
				subtitle: errors[0].file && errors[0].file.split('!').pop() || ''
			})
		}
	}))
	return devWebpackConfig
}).catch(error => { return console.log('WebpackConfig Error', error) })