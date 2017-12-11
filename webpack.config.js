var path = require("path");

module.exports = {
  entry: "./app/main.js",
  output: {
    filename: "mention.js",
    path: path.resolve(__dirname,"build")
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
        include: [
          path.resolve(__dirname, "app")
        ],
        loader: "sass-loader|style-loader"
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