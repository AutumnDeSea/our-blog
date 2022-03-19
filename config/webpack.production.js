// 安装@type/webpack 方便

const { ESBuildPlugin, ESBuildMinifyPlugin } = require('esbuild-loader');
const TerserPlugin = require('terser-webpack-plugin');
const os = require('os');
const { join } = require('path');
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  output: {
    path: join(__dirname, '../dist/asstest'),
    publicPath: './asstest/[name].[contenthash:5].bundle.[ext]',
    assetModuleFilename: '',
  },
  optimization: {
    // 写了minimize为true并且minimizer为[]，webpack就会放弃自身的优化策略
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: os.cpus().length - 1,
      }),
      // new ESBuildMinifyPlugin({
      //     target: "es2015"    
      // })
    ],
  },
  plugins:[
    // new ESBuildPlugin()
  ],
};
// esbuild 的tree-shaking和webpack的trees-haking理念有些不同
// esbuild 没有prepack，shaking的不够彻底。所以放弃

// 使用terser-webpack-plugin 进行压缩

// vite 原理 koa esbuild

