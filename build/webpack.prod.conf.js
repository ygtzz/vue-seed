var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var baseWebapckConfig = require('./webpack.base.conf');
var config = require('./config');

var oEntry = baseWebapckConfig.entry,
    aEntry = Object.keys(oEntry);

var aPlugin = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        chunks: aEntry,
        minChunks: 3
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['vendor', 'common']
    }),
    new ExtractTextPlugin('/static/style/[name].[contenthash:8].css'),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
];

//html webpack
aEntry.forEach(function(item) {
    aPlugin.push(new HtmlWebpackPlugin({
        filename: item + '.html',
        template: config.sBase + 'pages/' + item + '/' + item + '.html',
        chunks: [item, 'vendor', 'common'],
        inject: 'body',
        title: item + 'Page',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    }));
});

module.exports = merge(baseWebapckConfig, {
    entry: {
        vendor: ['vue', 'vuex', 'vue-router', 'vuex-router-sync']
    },
    output: {
        path: './dist',
        filename: '/static/scripts/[name].[chunkhash:8].js',
        chunkFilename: "/static/scripts/[name].[chunkhash:8].js"
    },
    plugins: aPlugin,
    devtool: 'cheap-module-source-map'
});