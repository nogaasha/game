const { resolve } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const config = {
  // entry: ['@babel/polyfill', './client/main.js'],
  entry: './client/index.js',
  mode: 'development',
  output: {
    filename: 'js/[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
    host: 'localhost',
    index: 'index.html',
    overlay: {
      warning: false,
      errors: true,
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"]
        },
        exclude: /node_modules/,
      },
      //test: /\.js$/,
      //  include: path.join(__dirname,'/app'),
      //   loader: 'babel-loader', 
      //   presets: ['es2015', 'react'] 
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            }
          },
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    // new HTMLWebpackPlugin({
    //   template: './index.html'
    //   //   minify: {
    //   //   collapseWhitespace: isProd
    //   // }
    // }),
    new MiniCSSExtractPlugin({
      filename: 'css/main.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/client/index.html`,
          to: 'index.html'
        }
      ]
    })
  ]
}

module.exports = config

