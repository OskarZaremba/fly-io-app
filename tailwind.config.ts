import type { Config } from 'tailwindcss';

const config: Config = {
	content: {
		files: [
			'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
			'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
			'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		],
		relative: true,
	},
	theme: {},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar'),
		require('tailwindcss-hyphens'),
	],
};

export default config;
