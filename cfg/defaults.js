'use strict';
const path = require('path');
const autoprefixer = require('autoprefixer');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;
function getDefaultModules() {
  return {
    preLoaders: [{
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }],
    loaders: [
      {
        test: /\.sass$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]',
          'postcss-loader',
          'sass-loader?precision=10&indentedSyntax=sass'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]',
          'postcss-loader'
        ]
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader!postcss-loader'
      // },
      // {
      //   test: /\.sass/,
      //   loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[name]__[local]!postcss-loader!sass-loader?precision=10&indentedSyntax=sass?outputStyle=expanded&indentedSyntax'
      // },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  };
}
module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules,
  postcss: [
  autoprefixer({ browsers: ['last 2 versions'] })
  ]
};
