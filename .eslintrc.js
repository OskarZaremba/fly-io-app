const [OFF, WARN, ERROR] = [0, 1, 2];

module.exports = {
	extends: [
		'next/core-web-vitals',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest-formatting/recommended',
		'plugin:jest/recommended',
	],
	parserOptions: { project: './tsconfig.json' },
	rules: {
		'import/order': [
			ERROR,
			{
				alphabetize: { order: 'asc', caseInsensitive: true },
				groups: [['external', 'builtin'], 'internal', 'parent', ['index', 'sibling'], 'object'],
				'newlines-between': 'always',
				pathGroups: [
					{ pattern: '@/**', group: 'internal' },
					{ pattern: 'react', group: 'external', position: 'before' },
				],
			},
		],
		'@typescript-eslint/consistent-type-exports': [
			WARN,
			{ fixMixedExportsWithInlineTypeSpecifier: false },
		],
		'@typescript-eslint/consistent-type-imports': [
			WARN,
			{ disallowTypeAnnotations: true, fixStyle: 'separate-type-imports', prefer: 'type-imports' },
		],
		'default-param-last': OFF,
		'@typescript-eslint/default-param-last': WARN,
		'max-params': OFF,
		'@typescript-eslint/max-params': WARN,
		'@typescript-eslint/no-mixed-enums': WARN,
		'prefer-destructuring': OFF,
		'@typescript-eslint/prefer-destructuring': WARN,
		'no-console': [ERROR, { allow: ['warn', 'error'] }],
		'padding-line-between-statements': OFF,
		'@typescript-eslint/padding-line-between-statements': [
			WARN,
			{ blankLine: 'never', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
			{
				blankLine: 'always',
				prev: '*',
				next: ['block-like', 'expression', 'function', 'if', 'iife', 'return'],
			},
			{ blankLine: 'always', prev: ['block-like', 'directive', 'expression', 'if'], next: '*' },
			{
				blankLine: 'always',
				prev: ['export', 'import'],
				next: ['block-like', 'const', 'directive', 'expression', 'if', 'let', 'var'],
			},
			{ blankLine: 'always', prev: '*', next: ['export'] },
			{ blankLine: 'never', prev: 'directive', next: 'directive' },
			{ blankLine: 'never', prev: 'if', next: ['if', 'switch'] },
			{ blankLine: 'never', prev: ['case', 'default'], next: '*' },
		],
		'prefer-const': [WARN, { destructuring: 'any', ignoreReadBeforeAssign: false }],
		'react/display-name': OFF,
	},
};
