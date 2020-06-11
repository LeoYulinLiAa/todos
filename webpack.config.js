const path = require('path');

module.exports = {
  entry: './frontend/todo_redux.jsx',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.*']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/assets/javascripts'),
  },
};
