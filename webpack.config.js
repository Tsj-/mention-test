module.exports = {
  entry: "./main.js",
  output: {
    filename: "mention.js",
    path: __dirname + "/build"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        loader: "babel"
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        loader: "sass|style"
      },
      {
        test: /\.(png|jpg|jpeg|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: env.ASSET_LIMIT,
            name: 'img/[name]_[sha512:hash:base64:7].[ext]'
        }
}
    ]
  }
}