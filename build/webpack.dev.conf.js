var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var merge = require('webpack-merge');
var baseWebapckConfig = require('./webpack.base.conf');
var config = require('./config');

var plugins = [
    new ExtractTextPlugin('style/[name].css'),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new webpack.HotModuleReplacementPlugin()
    //new webpack.NoErrorsPlugin()
];

var entry = baseWebapckConfig.entry;
Object.keys(entry).forEach(function(item){
       plugins.push(new HtmlWebpackPlugin({
            filename: item + '.html',
			template: config.sBase + 'pages/'+ item + '/' + item +'.html',
            chunks: [item],
            inject: 'body',
            title: item + 'Page'
		}));
});

module.exports = merge(baseWebapckConfig,{
    plugins:plugins,
    devtool: 'cheap-module-eval-source-map'
});
