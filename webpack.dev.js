module.exports = {
    entry: './src/scripts/index',
    output: {
        filename: './dist/dev/app.js'
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
    }
}