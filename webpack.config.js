/*
 * @Date: 2021-07-14 11:51:38
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-07-14 12:02:07
 * @Description: webpack配置
 */

const { resolve } = require('path');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        port: 9900,
        open: true,
        hot: true,
        publicPath: '/',
        contentBase: path.resolve(__dirname, 'www')
    },
    devtool: 'source-map'
};