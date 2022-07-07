import { Configuration } from 'webpack'
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const nodeExternals = require('webpack-node-externals')
const ConfigPaths = require('tsconfig-paths-webpack-plugin')

const IS_DEV = process.env.NODE_ENV !== 'production'
const SRC_DIR = path.join(__dirname, '../src')
const DIST_DIR = path.join(__dirname, '../dist')

const config: Configuration = {
    name: 'server',
    target: 'node',
    node: { __dirname: false },
    entry: path.join(SRC_DIR, 'server'),
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: 'null-loader',
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
                use: 'null-loader',
            },
        ],
    },
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: DIST_DIR,
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [
            new ConfigPaths.TsconfigPathsPlugin({
                configFile: './tsconfig.json',
            }),
        ],
    },

    devtool: 'source-map',

    performance: {
        hints: IS_DEV ? false : 'warning',
    },

    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],

    optimization: { nodeEnv: false },
}

export default config
