var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var config = require('./config');
var sBase = config.sBase;

module.exports = {
    entry: config.entry,
    output: {
        path: config.sDist,
        filename: '[name].js',
        chunkFilename: "[name].js"
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/static', to: 'static' },
         ])
	],
    module: {
        loaders: [
            {test: /\.(js|jsx|es)$/, loader: "babel", exclude: /node_modules/},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style','css!postcss')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!postcss!sass')},
            {test: /\.(html)$/, loader: 'html'},
            {test: /\.vue$/, loader: 'vue'},
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '/static/images/[name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name:'/static/fonts/[name].[ext]'
                }
            }
        ]
    },
    postcss: function () {
        return [autoprefixer({browsers: ['> 5%','ie 9']})]
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract("css"),
            sass: ExtractTextPlugin.extract("css!sass")
        }
    },
    resolve:{
        modulesDirectories: [ "node_modules",sBase,sBase+"pages", sBase+"widget",sBase+'mock'],
        extensions:['','.jsx','.js','.json','.es'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}