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
        path.resolve(root, 'app/index.jsx')
    ],
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(root, 'build'),
        publicPath: '/',
        port: 8709,
        host:'0.0.0.0',
        historyApiFallback: true
    }
}