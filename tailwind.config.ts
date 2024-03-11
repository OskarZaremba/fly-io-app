import type { Config } from 'tailwindcss';

const config: Config = {
	content: {
		files: ['./src/**/*.{ts,tsx}'],
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
