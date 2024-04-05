module.exports = {
	root: true,
	extends: ['universe/native'],
	rules: {
		// Ensures props and state inside functions are always up-to-date
		'react-hooks/exhaustive-deps': 'warn',

		'react/react-in-jsx-scope': 'off',

		'curly': ['error', 'multi-or-nest', 'consistent'],

		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
				disallowTypeAnnotations: true,
			},
		],

		'react/jsx-curly-brace-presence': ['error', 'always'],
		'react/jsx-sort-props': [
			'error',
			{
				callbacksLast: true,
				shorthandFirst: false,
				shorthandLast: true,
				multiline: 'ignore',
				ignoreCase: true,
				reservedFirst: ['key', 'ref'],
			},
		],

		/**
		 * Import rules
		 */
		...{
			'import/order': [
				'error',
				{
					'alphabetize': { order: 'asc', caseInsensitive: true },
					'newlines-between': 'always',
					'groups': [
						['builtin', 'external'],
						'internal',
						'parent',
						'sibling',
						'index',
						'object',
						'unknown',
					],
				},
			],

			// Disable because it's expensive
			'import/no-cycle': ['off'],

			// Disable because it's don't make sense
			'import/group-exports': ['off'],

			'import/namespace': ['error', { allowComputed: false }],
			'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
			'import/newline-after-import': ['error', { count: 1 }],
			'import/no-anonymous-default-export': ['error'],
		},
	},
};
