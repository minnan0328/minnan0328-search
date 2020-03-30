'use strict'
const path = require('path');

module.exports = {
    dev:{
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      proxyTable: {},
    },
    build:{
        index: path.resolve(__dirname, '../dist/index'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        productionSourceMap: true,
        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    }
}