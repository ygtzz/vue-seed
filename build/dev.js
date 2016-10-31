var webpack = require('webpack')
var prodConfig = require('./webpack.dev.conf');

var spinner = ora('building for production...')
spinner.start();

webpack(webpackConfig, function (err, stats) {
    spinner.stop();
    if (err) {
        throw err;
    }
})