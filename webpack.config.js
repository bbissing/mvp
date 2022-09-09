const path = require("path");

module.exports={
    mode: "development",
    entry: "./client/index.js",
    output: {
        path: path.resolve(__dirname, "client"),
        filename: "bundle.js"
    },
    module:{
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use:  'babel-loader'
            },
            {
              test: /\.css$/,
              exclude: /node_modules/,
              use: ['style-loader', 'css-loader']
            }
        ]
    }
}