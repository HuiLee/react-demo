const path = require('path')
const root = __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        path.resolve(root, 'src/main.js')
    ],
    output: {
        path: path.resolve(root, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {test: /\.jsx?$/,  use: ['babel-loader'], exclude: /node_modules/},
            { test: /\.less$/, use:['style-loader','css-loader','postcss-loader','less-loader'], exclude: /node_modules/ },
            { test: /\.css$/,  use:['style-loader','css-loader','postcss-loader'], exclude: /node_modules/},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(root, 'template.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(root, 'dist'),
        publicPath: '/',
        port: 8709,
        historyApiFallback: true
    }
}