const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const useRules = require('./config/useRules');

module.exports = (env) => ({
	devServer: {
		open: true,
		stats: 'errors-only',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack Inline CSS',
		}),
	],
	module: useRules(env),
});
