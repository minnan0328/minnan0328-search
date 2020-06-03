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
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = merge(baseWebpackConfig, {
	mode: 'production',
	devtool: '#source-map',
	output: {
		path: config.build.assetsRoot,
		filename: config.assetsPath('script/[name].[chunkhash].js'),
	},
	optimization: {
		minimizer: [
			new TerserJSPlugin({ sourceMap: true }),
			new OptimizeCSSAssetsPlugin({ sourceMap: true})
		],	//javascripe and css 壓縮
		runtimeChunk: { //拆分 js 
			name: "manifest",
		},
		splitChunks: { //拆分 js 
			chunks: 'all',
			name: true,
			cacheGroups: {
				commons: { 
					name: 'commons',
					chunks: 'initial',
					minChunks: 2 //當導入兩次以上的 code 就會被就會被提取出來
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/, //提取導入得模組
					name: 'vendors',
					chunks: 'initial',
					enforce: true
				}
			}
		}
	},
	plugins: [
		// new BundleAnalyzerPlugin(),
		//重新 build 時，刪除之前的 dist 版本
		new CleanWebpackPlugin(),
		new webpack.HashedModuleIdsPlugin(),
		new HtmlWebpackPlugin({
			filename: config.build.index,
			template: 'index.html',
			inject: true, //默認值為true，script 標籤位於 html 文件的 body 底部
		}),
		new MiniCssExtractPlugin({
			filename: config.assetsPath('css/[name].[contenthash].css'),
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, '../static'),
				to: config.build.assetsSubDirectory,
				ignore: ['.*']
			}
		]),
		new VueLoaderPlugin()
	]
})