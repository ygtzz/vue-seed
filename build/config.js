var path = require('path');

module.exports = {
    sBase: './src/',
    sDist: '/dist',
    dev:{
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


