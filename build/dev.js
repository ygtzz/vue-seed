var opn = require('opn');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackDevConfig = require('./webpack.dev.conf');
var config = require('./config');
var port = process.env.PORT || config.dev.port;

var compiler = webpack(webpackDevConfig);

var server = new webpackDevServer(compiler,{
    publicPath: '/',    
    contentBase: config.sDist,
    historyApiFallback: false,
    hot:true,
    inline: true,    
    stats: {
        colors: true
    }
});

server.listen(8080,'localhost',function(err){
    if(err){ throw err; return; }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')
    opn(uri)
});