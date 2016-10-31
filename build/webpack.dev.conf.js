var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var merge = require('webpack-merge');
var baseWebapckConfig = require('./webpack.base.conf');

module.exports = merge(baseWebapckConfig,{
    output: {
        path: './dist',
        filename: '[name].js',
        chunkFilename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
			template: sBase + 'pages/index/index.html',
            chunks: ['index'],
            inject: 'body',
            title: 'Index Page'
		}),
        new HtmlWebpackPlugin({
            filename: 'home.html',
			template: sBase + 'pages/home/home.html',
            chunks: ['home'],
            inject: 'body',
            title: 'Home Page'
		}),
        new ExtractTextPlugin('style/[name].css'),                
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV || 'dev')
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
		new webpack.HotModuleReplacementPlugin()       
        //new webpack.NoErrorsPlugin()
	],
    devtool: 'cheap-module-eval-source-map',   
    devServer:{
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }
});
