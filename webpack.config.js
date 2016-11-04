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
        loaders : [
            {
                test : /\.jsx?/,
                include : SRC_DIR,
                loader : 'babel'
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