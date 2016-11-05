var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src/');
var BIN_DIR = path.resolve(__dirname, 'bin/');

var config = {
    entry: SRC_DIR + '/main.jsx',
    output: {
        path: BIN_DIR,
        filename: 'bundle-main.js'
    },
    module : {
        /*preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],*/
        loaders : [
            {
                test: /\.jsx?/,
                include: SRC_DIR,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                include: SRC_DIR,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.png$/,
                include: SRC_DIR,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.jpg$/,
                include: SRC_DIR,
                loader: 'file-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: true
            }
        })
    ]
};

module.exports = config;