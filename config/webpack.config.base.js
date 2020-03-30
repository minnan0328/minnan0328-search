'use strict'
const path = require('path')
const WebpackConfig = require('./webpack.config')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

const assetsPath = ((_path) => {
    const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
        WebpackConfig.build.assetsSubDirectory :
        WebpackConfig.dev.assetsSubDirectory

    return path.posix.join(assetsSubDirectory, _path)
})

module.exports = {
    // mode: 'production',
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: WebpackConfig.build.assetsRoot,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                limit: 10000,
                name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                limit: 10000,
                name: assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                limit: 10000,
                name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [new VueLoaderPlugin(), new HtmlWebpackPlugin()]
};