var path = require('path');
 
var sBase = './src/';
module.exports = {
    sBase: sBase,
    sDist: '/dist',
    entry: {
        index: sBase + 'pages/index/index.js',
        home: sBase + 'pages/home/home.js',
        ele: sBase + 'pages/ele/ele.js',
        ele1: sBase + 'pages/ele1/ele1.js'
    },
    dev:{
        proxy:{
            '/form/getData':{
                target: 'http://pre3.papayamobile.com:1299/shoptimize'
            }
        },
        env:'',
        port: 8080,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
    },
    build:{
        env: '',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
    }
}


