var copyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/',
    output: {
        filename: './dist/release/index.js'
    },
    resolve: {
        modules: ["node_modules"],
        extensions: ['.ts']
    },
    devtool: "source-map-inline",
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                include: [/src/],
                exclude: [/(node_modules)/]
            }
        ]
    },
    stats: {
        errorDetails: true
    },
    plugins: [
    ]
}