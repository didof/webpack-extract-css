const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
      new MiniCssExtractPlugin({
         filename: '[name].[hash].css'
      })
	],
	module: useRules(env),
});
