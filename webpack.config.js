const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './index.js',

    module: {
        rules:[
            {
                test: /\.(js)$/,
                use: "babel-loader",
              },
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist2'),
        filename: 'bundle.js'
    },

    plugins: [new HtmlWebpackPlugin()]
}