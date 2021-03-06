module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
		commonjs: true
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 12
	},
	rules: {
		'no-console': 'off',
		'no-debugger': 'warn',
		'no-multi-spaces': 'warn',
		'no-multiple-empty-lines': 'warn',
		'no-trailing-spaces': 'error',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		semi: ['error', 'never'],
		quotes: ['error', 'single'],
		'linebreak-style': ['error', 'unix'],
		'brace-style': ['error', '1tbs'],
		'eol-last': ['error', 'always'],
		'comma-dangle': ['warn', 'never'],
		'array-bracket-spacing': ['warn', 'never'],
		'object-curly-spacing': ['warn', 'always']
	}
}
