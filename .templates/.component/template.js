exports.component = name => `import type { FC } from 'react';

interface IProps {}

export const ${name}: FC<IProps> = () => {
	return <div>Hello 👋, I am a ${name} component</div>;
};`;
exports.index = name => `export { ${name} } from './${name}';`;
exports.stories = name => `import type { Meta, StoryObj } from '@storybook/react';

import { ${name} } from './${name}';

const meta = { title: 'Design System/Components/${name}', component: ${name} } satisfies Meta<
	typeof ${name}
>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: {} };`;
exports.tests = name => `import { render, screen } from '@testing-library/react';

import { ${name} } from './${name}';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<${name} />);

describe('${name} - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a ${name} component')).toBeInTheDocument();
	});
});`;
