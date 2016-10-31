var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackDevConfig = require('./webpack.dev.conf');
var config = require('./config');

console.log(config);

var compiler = webpack(webpackDevConfig);

var server = new webpackDevServer(compiler,{
    contentBase: config.sDist,
    historyApiFallback: false,
    hot:true,
    progress:true,
    colors:true,
    inline:true
});

server.listen(8080,'localhost',function(err){
    if(err){
        throw err;
    }
});