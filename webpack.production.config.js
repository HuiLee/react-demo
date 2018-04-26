const pkg = require('./package.json')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const root = __dirname
module.exports = {
    mode: 'production',
    entry: {
        app:path.resolve(root, 'app/index.jsx'),
        vendor:Object.keys(pkg.dependencies),
    },
    output: {
        path:path.resolve(__dirname, 'build'),
        filename: '[name].[hash].bundle.js',
        publicPath: '/'
    },
    resolve:{
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {test: /\.(js|jsx)?$/, use: ['babel-loader'], exclude: /node_modules/},
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
                exclude: /node_modules/
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'], exclude: /node_modules/},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(root, 'template.html')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),

    ]
}