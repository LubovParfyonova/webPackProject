const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'bandle')
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
}