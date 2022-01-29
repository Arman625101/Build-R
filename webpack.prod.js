const path = require('path');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodConfig = {
    mode: 'production',
    output: {
        path: path.resolve('dist'),
        filename: '[name].[contenthash].bundle.js'
    },
    plugins: [new CleanWebpackPlugin()]
};

module.exports = merge(commonConfig, prodConfig);
