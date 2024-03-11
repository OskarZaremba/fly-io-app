import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
	customViewport1: {
		name: 'Custom Viewport 1',
		styles: { width: '600px', height: '963px' },
	},
};

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
		layout: 'centered',
		options: { storySort: { method: 'alphabetical' } },
		viewport: { viewports: { ...INITIAL_VIEWPORTS, ...customViewports } },
	},
};

export default preview;
