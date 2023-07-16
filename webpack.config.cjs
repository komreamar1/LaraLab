const path = require('path');

module.exports = {
    mode:'development',
    entry: path.resolve(__dirname, 'resources/src/', 'index'),
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public/dist'),
        open: true,
        clientLogLevel: 'silent',
        port: 9000
    },
    module: {
        rules: [{
            test: /\.(jsx|cjs)$/,
            include: path.resolve(__dirname, 'resources/src'),
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            "targets": "defaults"
                        }], '@babel/preset-react'
                    ]
                }
            }]
        }]
    }
}
