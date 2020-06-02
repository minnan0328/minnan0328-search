'use strict'
const path = require('path');
const assetsSubDirectory = 'static'
module.exports = {
	dev: {
		assetsSubDirectory: assetsSubDirectory,
		assetsPublicPath: '/',
		proxyTable: {},
		host: 'localhost',
		port: 8080,
		isOpenBrowser: false
	},
	build: {
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: assetsSubDirectory,
	},
	assetsPath: ((_path) => {
		return path.posix.join(assetsSubDirectory, _path)
	})
}