const path = require('path');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
  entry: './src/index.js', //相对路径
  output: {
      path: path.resolve(__dirname, 'build'), //打包文件的输出路径
      filename: 'bundle.js' //打包文件名
  },
  mode: 'production',
  plugins:[
    new ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "window.jQuery":"jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: ['env', 'react'],
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}