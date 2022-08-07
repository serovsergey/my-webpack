const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto',
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        },
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.[s]css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    // [style-loader](/loaders/style-loader)
                    // { loader: 'style-loader' },
                    // // [css-loader](/loaders/css-loader)
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    // [sass-loader](/loaders/sass-loader)
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body' }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    })],
};