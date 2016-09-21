const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
	entry: './web_client/app.js',
	output: {
       path: `${__dirname}/main/static`,
       filename: 'app.js'
   	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss'],
		modulesDirectories: [
			'node_modules'
		]
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				include: [
					path.resolve(__dirname, "web_client")
				]
			},
			{
				test: /\.s[a|c]ss$/,
                loader: 'style!css!postcss!sass'
			}
		]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, "./web_client"),
			path.resolve(__dirname, "./node_modules/bootstrap/scss")
		]
	},
	postcss: () => [autoprefixer({ browsers: ['> 1%'] })]
}
