import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from './Separator';

const meta = { title: 'Design System/Components/Separator', component: Separator } satisfies Meta<
	typeof Separator
>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: {} };
