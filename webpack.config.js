const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry: {
        app: [path.join(__dirname, 'src/index.js')]
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: "/",
        filename: "[name].[hash:8].js",
        chunkFilename: "[name].[chunkhash:8].js"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: ['babel-loader?cacheDirectory=true']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:[
                    'style-loader',
                    { loader: 'css-loader',options: {modules: { localIdentName: '[name]_[local]_[hash:base64:5]'},}},
                    // 'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]',
                    'postcss-loader'
                ]
            },
            {// antd样式处理
                test:/\.css$/,
                exclude:/src/,
                use:[
                    { loader: "style-loader",},
                    {
                        loader: "css-loader",
                        options:{
                            importLoaders:1
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|xlsx)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            name: true,
            chunks: "all",
        },
        runtimeChunk: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, 'src/index.html'),
            chunksSortMode: "none"
        }),
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:5].css'
        })
    ],
    devtool: 'cheap-module-source-map',
    resolve: {
        extensions: ['.js', '.jsx', 'sass', 'css', '.ts', '.tsx'],
        alias: {
            screens: path.join(__dirname, 'src/screens'),
            components: path.join(__dirname, 'src/components'),
            containers: path.join(__dirname, 'src/containers'),
            router: path.join(__dirname, 'src/router'),
            services: path.join(__dirname, 'src/services'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
            sagas: path.join(__dirname, 'src/redux/sagas'),
            utils: path.join(__dirname, 'src/utils'),
            assets: path.join(__dirname, 'src/assets')
        }
    },
}
