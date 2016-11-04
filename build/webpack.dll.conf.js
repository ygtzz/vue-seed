var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseWebapckConfig = require('./webpack.base.conf');

// import Element from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';

var sPath = './dll';

module.exports = {
  output: {
    path: sPath,
    filename: 'dll.[name].js',
    library: '[name]_[hash]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  },
  entry: {
    vue: ['vue','vuex','vue-router','vuex-router-sync'],
    ele: ['element-ui']
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(sPath, "[name]-manifest.json"),
      name: "[name]_[hash]",
      context: '/dll', // 指定一个路径作为上下文环境，需要与DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
    }),
    new ExtractTextPlugin('[name].css'), 
  ],
  module: baseWebapckConfig.module, // 沿用业务代码的module配置
  resolve: baseWebapckConfig.resolve, // 沿用业务代码的resolve配置
};