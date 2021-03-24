const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    target: "web",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        clientLogLevel: 'silent',
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: false,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader?attrs[]=video:src'
            },
            {
                test: /\.mp4$/,
                loader: 'url?limit=10000&mimetype=video/mp4'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "./src/stylesheets/index.css",
        }),
    ],
}