var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var extractCss = new ExtractTextPlugin('style/[name].css');

var sBase = './src/mods/';

module.exports = {
    entry: {
        index: sBase + 'pages/index/index.es',
        home: sBase + 'pages/home/home.es',
    },
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
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV || 'dev')
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
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
		new webpack.HotModuleReplacementPlugin(),        
        new webpack.NoErrorsPlugin()
	],
    module: {
        loaders: [
            {test: /\.(js|jsx|es)$/, loader: "babel", exclude: /node_modules/},
            {test: /\.css$/, loader: extractCss.extract('style','css')},
            {test: /\.scss$/, loader: extractCss.extract('css!sass')},
            {test: /\.(jpg|png|gif)$/, loader: "url?limit=8192"},
            { test: /\.(html|tpl)$/, loader: 'html-loader' }          
        ]
    },
    resolve:{
        modulesDirectories: [ "node_modules",sBase,sBase+"pages", sBase+"widget",sBase+"vuex",sBase+'mock'],
        extensions:['','.jsx','.js','.json','.es']
    },
    // externals:{
    //     'react': 'window.React',
    //     'jquery': 'window.jQuery'
    // },
    devtool: 'cheap-module-eval-source-map',   
    devServer:{
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }
};
