var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
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
        })
	],
    module: {
        loaders: [
            {test: /\.(js|jsx|es)$/, loader: "babel", exclude: /node_modules/},
            {test: /\.css$/, loader: extractCss.extract('style','css')},
            {test: /\.scss$/, loader: extractCss.extract('css!sass')},
            {test: /\.(html|tpl)$/, loader: 'html-loader'},
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'static/images/[name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name:'static/fonts/[name].[ext]'
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