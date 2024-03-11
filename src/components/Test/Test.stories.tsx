import type { Meta, StoryObj } from '@storybook/react';

import { Test } from './Test';

const meta = { title: 'Design System/Components/Test', component: Test } satisfies Meta<
	typeof Test
>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: {} };
