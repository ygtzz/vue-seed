var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var baseWebapckConfig = require('./webpack.base.conf');
var config = require('./config');

var plugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: config.sBase + 'pages/index/index.html',
        chunks: ['index', 'vue.chunk'],
        inject: 'body',
        title: 'Index Page'
    }),
    new HtmlWebpackPlugin({
        filename: 'home.html',
        template: config.sBase + 'pages/home/home.html',
        chunks: ['home', 'vue.chunk'],
        inject: 'body',
        title: 'Home Page'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vue.chunk',
        chunks: ['index', 'home'],
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

var entry = baseWebapckConfig.entry;
//chunk
//html webpack
Object.keys(entry).forEach(function(item){
       plugins.push(new HtmlWebpackPlugin({
            filename: item + '.html',
			template: config.sBase + 'pages/'+ item + '/' + item +'.html',
            chunks: [item],
            inject: 'body',
            title: item + 'Page'
		}));
        new HtmlWebpackPlugin({
        filename: 'index.html',
        template: config.sBase + 'pages/index/index.html',
        chunks: ['index', 'vue.chunk'],
        inject: 'body',
        title: 'Index Page'
    }),
});

module.exports = merge(baseWebapckConfig,{
    output: {
        path: './dist',
        filename: '/static/scripts/[name].[chunkhash:8].js',
        chunkFilename: "/static/scripts/[name].[chunkhash:8].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
			template: config.sBase + 'pages/index/index.html',
            chunks: ['index','vue.chunk'],
            inject: 'body',
            title: 'Index Page'
		}),
        new HtmlWebpackPlugin({
            filename: 'home.html',
			template: config.sBase + 'pages/home/home.html',
            chunks: ['home','vue.chunk'],
            inject: 'body',
            title: 'Home Page'
		}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vue.chunk',
            chunks: ['index','home'],
            minChunks: 2            
        }),
        new ExtractTextPlugin('/static/style/[name].[contenthash:8].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
	],
    devtool: 'cheap-module-source-map'
});
