var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('./config');
var sBase = config.sBase;

module.exports = {
    entry: {
        index: sBase + 'pages/index/index.js',
        home: sBase + 'pages/home/home.js',
    },
    output: {
        path: config.sDist,
        filename: '[name].js',
        chunkFilename: "[name].js"
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/static', to: 'static' },
        ]),
        new CleanWebpackPlugin(['dist'], {
            verbose: true
        })
	],
    module: {
        loaders: [
            {test: /\.(js|jsx|es)$/, loader: "babel", exclude: /node_modules/},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style','css')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')},
            {test: /\.(html|tpl)$/, loader: 'html-loader'},
            {test: /\.vue$/, loader: 'vue'},
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'static/images/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name:'static/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve:{
        modulesDirectories: [ "node_modules",sBase,sBase+"pages", sBase+"widget",sBase+'mock'],
        extensions:['','.jsx','.js','.json','.es'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}