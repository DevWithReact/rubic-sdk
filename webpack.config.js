const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin({
            checkResource(resource) {
                // "@ethereumjs/common/genesisStates" consists ~800KB static files which are no more needed
                return /(.*\/genesisStates\/.*\.json)/.test(resource)
            },
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser'
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map",
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            "@common": path.resolve(__dirname, 'src/common'),
            "@features": path.resolve(__dirname, 'src/features'),
            "@core": path.resolve(__dirname, 'src/core'),
            "src": path.resolve(__dirname, 'src'),
            // To avoid blotting up the `bn.js` library all over the packages
            // use single library instance.
            "bn.js": path.resolve(__dirname, 'node_modules/bn.js')
        },
        fallback: {
            "path": false,
            "os": false,
            "url": false,
            "http": require.resolve("http-browserify"),
            "https": require.resolve("https-browserify"),
            "stream": require.resolve("stream-browserify"),
            "crypto": require.resolve("crypto-browserify")
        }
    },
    output: {
        filename: 'rubic-sdk.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'RubicSDK',
        clean: true
    },
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false
        })],
    },
    devtool: false,
    mode: 'production'
};
