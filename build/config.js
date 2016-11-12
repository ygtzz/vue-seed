var path = require('path');
var proxy = require('./proxy');

var sBase = './src/';
module.exports = {
    sBase: sBase,
    sDist: '/dist',
    sDest: './dist',
    entry: {
        index: sBase + 'pages/index/index.js',
        home: sBase + 'pages/home/home.js',
        ele: sBase + 'pages/ele/ele.js'
    },
    dev: {
        proxy: proxy,
        env: '',
        port: 8080,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
    },
    build: {
        env: '',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
    }
}