const path = require('path')
const root = __dirname

module.exports = {
    mode: 'development',
    // 入口文件
    entry: path.resolve(root, 'src/main.js'),
    // 出口文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(root, 'dist')
    },
    // loaders
    module: {
        rules: [
            {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/}
        ]
    }
}