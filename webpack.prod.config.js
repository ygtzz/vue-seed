var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var extractCss = new ExtractTextPlugin('style/[name].[contenthash:8].css');

var sBase = './src/mods/';

module.exports = {
    entry: {
        index: sBase + 'pages/index/index.es',
        home: sBase + 'pages/home/home.es'
    },
    output: {
        path: './dist',
        filename: '[name].[chunkhash:8].js',
        chunkFilename: "[name].[chunkhash:8].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
			template: sBase + 'pages/index/index.html',
            chunks: ['index','vue.chunk'],
            inject: 'body',
            title: 'Index Page'
		}),
        new HtmlWebpackPlugin({
            filename: 'home.html',
			template: sBase + 'pages/home/home.html',
            chunks: ['home','vue.chunk'],
            inject: 'body',
            title: 'Home Page'
		}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vue.chunk',
            chunks: ['index','home'],
            minChunks: 2            
        }),
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
        new CopyWebpackPlugin([
            { from: 'src/static', to: 'static' },
        ]),
        new CleanWebpackPlugin(['dist'], {
            verbose: true
        }),
        extractCss,        
        new webpack.ProvidePlugin({
            $: "jquery",
            "window.jQuery": "jquery"
        }),        
        new webpack.optimize.OccurenceOrderPlugin()
	],
    module: {
        loaders: [
            {test: /\.(js|jsx|es)$/, loader: "babel", exclude: /node_modules/},
            {test: /\.css$/, loader: extractCss.extract('style','css')},
            {test: /\.scss$/, loader: extractCss.extract('css!sass')},
            {test: /\.(jpg|png|gif)$/, loader: "url?limit=8192&name=static/images/[name].[ext]"},
            {test: /\.(html|tpl)$/, loader: 'html-loader'}     
        ]
    },
    resolve:{
        modulesDirectories: [ "node_modules",sBase,sBase+"pages", sBase+"widget",sBase+"vuex",sBase+'mock'],
        extensions:['','.jsx','.js','.json','.es','.css','.scss']
    },
    devtool: 'cheap-module-source-map'
};
