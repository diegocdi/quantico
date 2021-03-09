const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {    
    cdiwebcomponents: [      
      './lib/config/config.css',
      './lib/config/config.js'
    ]
  },
  output: {
    filename: '[name].js',
  },
  module: {    
    rules: [
      {
        test: /\.css$/,
        use: [
           MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },  
  optimization: {
    minimize: false,
    minimizer: [
      new CssMinimizerPlugin(),
      new UglifyJsPlugin()
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],
};