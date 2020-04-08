process.env.NODE_ENV = 'production'

const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const webpackConfig = merge(baseWebpackConfig, {
	mode: 'production',
	devtool: '#source-map',
	output: {
		path: config.build.assetsRoot,
		filename: config.assetsPath('script/[name].[chunkhash].js'),
		chunkFilename: config.assetsPath('script/[id].[chunkhash].js')
	},
	//javascripe and css 壓縮
	optimization: {
		minimizer: [new TerserJSPlugin({ sourceMap: true }), new OptimizeCSSAssetsPlugin({ sourceMap: true})]
	},
	plugins: [
		//重新 build 時，刪除之前的 dist 版本
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: config.build.index,
			template: 'index.html',
			inject: true, //默認值為true，script 標籤位於 html 文件的 body 底部
		}),
		new MiniCssExtractPlugin({
			filename: config.assetsPath('css/[name].[contenthash].css'),
			chunkFilename: config.assetsPath('css/[id].[chunkhash].css')
		}),
		new webpack.HashedModuleIdsPlugin(),
		new CopyWebpackPlugin([///待解決資料重複問題
			{
				from: path.resolve(__dirname, '../static'),
				to: config.build.assetsSubDirectory,
				ignore: ['.*']
			}
		]),
		new VueLoaderPlugin()
	]
})
module.exports = webpackConfig