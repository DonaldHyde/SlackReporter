var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './slack/app.jsx'],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: './public/built',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/built/'
    },
    devServer: {
        contentBase: './public',
        publicPath: 'http://localhost:8080/built/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                // include: './javascripts',
                exclude: /node_modules/
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};