# webpack-quickstart

https://ui.dev/webpack

https://www.youtube.com/watch?v=yiwSVeHYosQ

https://github.com/hiteshchoudhary/webpack-youtube-21/blob/main/webpack.config.js



# intro
Webpack is a module bundler at its core.
We write JS code in modular fashion at differennt files and directories. Traditionally we have to add all these files in <script/> tag.
With web pack, it generates a single bundled js file.

With help of loaders and initializers, it can also do pre and post processing before and after the bundle is generated.

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
Out of the box, when webpack is building its dependency graph by examining all of your import/require() statements, it's only able to process JavaScript and JSON files.
When we want to process other types of fies(e.g. .css or .svg) we need loaders to trannsform them first.

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
By setting mode to production, webpack will automatically set process.env.NODE_ENV to production. It will also minify our code and strip out warnings.
## plugin
plugins are used after build.  e.g. html-webpack-plugin generates a html file and inject output file to it.

example:

  plugins: [new HtmlWebpackPlugin()],




