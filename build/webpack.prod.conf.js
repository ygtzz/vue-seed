var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var baseWebapckConfig = require('./webpack.base.conf');
var config = require('./config');

var oEntry = baseWebapckConfig.entry,
    aEntry = Object.keys(oEntry);

var aPlugin = [
    new webpack.DllReferencePlugin({
      context: '/dll',
      manifest: require('../dll/vue-manifest.json'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        chunks: aEntry,
        minChunks: 2
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
aEntry.forEach(function(item){
    aPlugin.push(new HtmlWebpackPlugin({
        filename: item + '.html',
        template: config.sBase + 'pages/' + item + '/' + item + '.html',
        chunks: [item, 'common'],
        inject: 'body',
        title: item + 'Page'
    }));
});

module.exports = merge(baseWebapckConfig,{
    output: {
        path: './dist',
        filename: '/static/scripts/[name].[chunkhash:8].js',
        chunkFilename: "/static/scripts/[name].[chunkhash:8].js"
    },
    plugins:aPlugin,
    devtool: 'cheap-module-source-map'
});
