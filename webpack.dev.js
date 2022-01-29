const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true
        }
    }
};

module.exports = merge(commonConfig, devConfig);
