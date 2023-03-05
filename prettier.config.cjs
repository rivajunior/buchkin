module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',
	overrides: [
		{
			files: '*.{css,sass,scss}',
			options: {
				singleQuote: false,
			},
		},
	],
};
