const { loadCSS, extractCSS } = require('./loaders');

module.exports = (env) => {
	const loaders = {
		css: (i) => {
			switch (i) {
				case 'inline':
					return loadCSS();
				case 'MCEP':
					return extractCSS();
				default:
					throw new Error(`The instruction ${i} is not covered`);
			}
		},
	};

	// developer interface
	const instructions = {
		css: {
			development: 'inline',
			production: 'MCEP',
		},
	};

	// business logic
	let message = '[useRules] ';
	const rules = Object.entries(instructions).map(([key, value]) => {
		const i = instructions[key][env];
		message += key + '|' + i;
		return loaders[key](i);
	});

	console.info(message);
	return { rules };
};
