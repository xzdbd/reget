module.exports = {
    entry: ['babel-polyfill', './src/entry.js'],
    output: {
        path: __dirname + '/',
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel-loader'
            }
        ]
    },
};