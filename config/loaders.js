const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function addConfigs(r, c) {
	Object.entries(c).forEach(([key, value]) => {
		if (!value) return;
		r[key] = value;
	});
	return r;
}

exports.loadCSS = (config = {}) => {
	const rule = {
		test: /\.css$/i,
		use: ['style-loader', 'css-loader'],
	};

	return addConfigs(rule, config);
};

exports.extractCSS = (config = {}) => {
	// basic rule
	const rule = {
		test: /\.css$/i,
		use: [MiniCssExtractPlugin.loader, 'css-loader'],
	};

	return addConfigs(rule, config);
};
