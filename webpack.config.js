var webpack = require("webpack");

module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: ["./src/js/main.js"],
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
    watch: true,
    module:{

		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
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
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
				use: {
                    loader: "eslint-loader",
                    options: {
					}
                }

            },
		]

	},
	resolve: {
		extensions: [' ', '.js','.es6'],
	},
	plugins: [new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		compress: {
			warnings: false
		}
	})],
	devServer: {
		inline:true,
		port: 8081,
		contentBase: "./dist"

	}
};