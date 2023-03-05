// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ['solid', 'eslint-plugin-tsdoc'],
	extends: [
		'xo',
		'plugin:solid/recommended',
		'plugin:unicorn/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
		'plugin:import/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
				'plugin:solid/typescript',
				'plugin:@typescript-eslint/recommended',
				'plugin:import/typescript',
				'plugin:prettier/recommended',
			],
			files: ['*.ts', '*.tsx'],
		},
	],
	// Repeated here from eslint-config-xo in case some plugins set something different
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'eslint-comments/no-unused-disable': 'error',
		'unicorn/filename-case': 'off',
		'unicorn/no-null': 'off',
		'unicorn/prefer-ternary': ['error', 'only-single-line'],

		// Disabled as it's already covered by the `unicorn/no-abusive-eslint-disable` rule.
		'eslint-comments/no-unlimited-disable': 'off',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true, // Always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
			},
		},
	},
};
