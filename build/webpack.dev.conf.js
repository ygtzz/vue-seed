var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var baseWebapckConfig = require('./webpack.base.conf');
var config = require('./config');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var aPlugin = [
    new OpenBrowserPlugin({ url: 'http://localhost:' + config.dev.port }),
    new ExtractTextPlugin('style/[name].css',{
        allChunks:true
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        }
    }),
    new webpack.HotModuleReplacementPlugin()
    //new webpack.NoErrorsPlugin()
];

var oEntry = baseWebapckConfig.entry,
    aEntry = Object.keys(oEntry);

aEntry.forEach(function(item){
    aPlugin.push(new HtmlWebpackPlugin({
        filename: item + '.html',
        template: config.sBase + 'pages/' + item + '/' + item + '.html',
        chunks: [item],
        inject: 'body',
        title: item + ' Page'
    }));
});

module.exports = merge(baseWebapckConfig,{
    plugins: aPlugin,
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase:        config.sDist,
        historyApiFallback: true,
        inline:             true,
        progress:           true,
        colors:             true,
        proxy: config.dev.proxy  
    }
});
