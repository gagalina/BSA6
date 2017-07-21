var webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: ["./src/js/main.js"],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    watch: true,
    devtool: 'source-map',
    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
                use: {
                    loader: "eslint-loader",
                }

            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            limit: 10000,
                            importLoaders: 1
                        },
                    },
                ]

            },
            {
                test: /\.sass$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            limit: 10000,
                            importLoaders: 1
                        }
                    },
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.js/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: 'file-loader'
                }
            },

        ]

    },
    resolve: {
        extensions: [' ', '.js', '.es6'],
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false
        },
        output: {
            comments: false
        }
    })],
    devServer: {
        inline: true,
        port: 8081,
        contentBase: "./dist"

    }
};