module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/docs/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  node: {
    net: 'empty',
    tls: 'empty'
  },
}