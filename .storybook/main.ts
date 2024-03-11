import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
		'@storybook/addon-onboarding',
	],
	core: { disableTelemetry: true, enableCrashReports: true },
	docs: { autodocs: true, defaultName: 'Documentation' },
	framework: { name: '@storybook/nextjs', options: {} },
	staticDirs: ['../public'],
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
};

export default config;
