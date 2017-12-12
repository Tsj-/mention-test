var path = require("path");

module.exports = {
  entry: "./app/main.js",
  output: {
    filename: "mention.js",
    path: path.resolve(__dirname, "build")
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      React: path.resolve(__dirname, './node_modules/react')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: 'img/[name]_[sha512:hash:base64:7].[ext]'
        }
      }
    ]
  }
}