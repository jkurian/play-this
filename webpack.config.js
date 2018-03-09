var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, "src"),
    mode: 'development',
    entry: './js/client.js',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['react', 'env', 'stage-2'],
                            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                loader: "url-loader",
                query: { mimetype: "image/png" }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: debug ? "inline-sourcemap" : null,
    output: {
        path: __dirname + "/src/",
        filename: "client.min.js"
    },
    devServer: {
        publicPath: "/",
        contentBase: "src",
        hot: true
    },
};