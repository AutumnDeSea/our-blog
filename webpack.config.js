// webpack4 和webpack5的性能优化区别

const { resolve } =  require("path")
const merge = require("webpack-merge")
const argv = require("yargs-parser")(process.argv.slice(2))
const _mode = argv.mode || "development"
const _mergeConfig = require(`./config/webpack.${_mode}.js`)
const Webpackbar = require("webpackbar")
//  webpack默认加载.json .js .wasm .ts需要自己设置
const webpackBaseConfig = {
  cache: {
    type: "filesystem"
  },
  entry: {
    main: resolve('src/web/index.tsx')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@component": resolve("src/web/component"),
      "@atoms": resolve("src/web/atoms"),
      "@selectors": resolve("src/web/selectors")
    },
    extensions: [".js", ".ts", ".tsx", "jsx"],
  },
  plugins: [new Webpackbar()]
}
module.exports = merge.default(webpackBaseConfig, _mergeConfig)
