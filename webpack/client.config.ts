import { Configuration, SingleEntryPlugin, DefinePlugin } from 'webpack'
require('dotenv').config()
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ConfigPaths = require('tsconfig-paths-webpack-plugin')

const IS_DEV = process.env.NODE_ENV !== 'production'
const SRC_DIR = path.join(__dirname, '../src')
const DIST_DIR = path.join(__dirname, '../dist')

const config: Configuration = {
    entry: [IS_DEV && 'react-hot-loader/patch', path.join(SRC_DIR, 'index')],
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ['html-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: 'asset',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    output: {
        path: DIST_DIR,
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        modules: ['src', 'node_modules'],
        alias: { 'react-dom': '@hot-loader/react-dom' },
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [
            new ConfigPaths.TsconfigPathsPlugin({
                configFile: './tsconfig.json',
            }),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        !IS_DEV && new CompressionPlugin(),
        new DefinePlugin({
            'process.env.REACT_APP_API_URL': JSON.stringify(
                process.env.REACT_APP_API_URL
            ),
        }),
    ].filter(Boolean) as SingleEntryPlugin[],

    devtool: 'source-map',

    performance: {
        hints: IS_DEV ? false : 'warning',
    },
}

export default config
