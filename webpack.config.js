module.exports = {
	entry: {
		index: './app/views/pages/index/main.js',
		mvp: './app/views/pages/mvp/main.js'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/app/dist/scripts'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};