const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: ['./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
     devServer: {
        contentBase: './dist',
        open: {
            app: ['chrome', '--incognito', '--other-flag']
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    // module: {
    //     rules: [{
    //         test: /\.js$/,
    //         exclude: /node_modules/,
    //         use: {
    //             loader: 'babel-loader'
    //         }
    //     }]
    // }
   module: {
       rules: [{
           test: /\.js$/,
           exclude: /(node_modules|bower_components)/,
           use: {
               loader: 'babel-loader',
               options: {
                   presets: ['@babel/preset-env']
               }
           }
       }]
   }
};