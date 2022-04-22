// webpack4 和webpack5的性能优化区别
const { resolve } =  require("path")
const merge = require("webpack-merge")
const argv = require("yargs-parser")(process.argv.slice(2))
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _mode = argv.mode || "development"
const _mergeConfig = require(`./config/webpack.${_mode}.js`)
const Webpackbar = require("webpackbar")
//  webpack默认加载.json .js .wasm .ts需要自己设置
const webpackBaseConfig = {
  cache: {
    type: "filesystem"
  },
  entry: {
    main: resolve('src/index.tsx')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', 
          'css-loader', 
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: { '@primary-color': 'rgba(25, 25, 25, 1)' },
                javascriptEnabled: true,
              },
            },
          }
        ],
      },
    ]
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
      "@components": resolve("src/components")
    },
    extensions: [".js", ".ts", ".tsx", "jsx"],
  },
  plugins: [
    new Webpackbar(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].css',
    })]
}
module.exports = merge.default(webpackBaseConfig, _mergeConfig)
