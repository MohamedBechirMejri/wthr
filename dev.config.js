const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {},
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
        new DashboardPlugin(),
    ],
    module: {
        rules: [{
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};
