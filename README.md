# webpack-quickstart
 
https://www.youtube.com/watch?v=yiwSVeHYosQ

https://github.com/hiteshchoudhary/webpack-youtube-21/blob/main/webpack.config.js


# webpack.config.js fields

## entry
This is the entry file for webpack build

## output
output file details 
If not specified default is "dist/main.js"

    output: {
        path: path.resolve(__dirname, 'dist2'),
        filename: 'bundle.js'
    }

## loaders

syntax

    module: {
        rules:[
            {
                test: /\.(js)$/,
                use: "babel-loader",
              },
        ]
    },

loaders are used by webpack if specified during build.

test :- File that matches the regex will be processed by the loader
use :- loader/s that will be used for processing. When we have more than 1 we can specify as an array and it gets processed right to left.

## mode
If it is production or development. default is production

## plugin
plugins are used after build.  e.g. html-webpack-plugin generates a html file and inject output file to it.

example:

  plugins: [new HtmlWebpackPlugin()],




