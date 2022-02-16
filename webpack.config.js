const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const pathToBandle = path.resolve(__dirname, 'bandle');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MY AWESOME WEBPACK PAGE',
            template: './index.html'
        })
    ],
    output: {
        filename: '[contenthash].js',
        path: pathToBandle,
        clean: true,
    },
    mode: 'development',
    devServer: {
        static: pathToBandle,
      },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
}