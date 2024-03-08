exports.test = name => `import { render, screen } from '@testing-library/react';

import { ${name} } from './${name}';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<${name} />);

describe('${name} - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a ${name} component')).toBeInTheDocument();
	});
});`;
exports.component = name => `import type { FC } from 'react';

interface IProps {}

export const ${name}: FC<IProps> = () => {
	return <div>Hello 👋, I am a ${name} component</div>;
};`;
exports.index = name => `export { ${name} } from './${name}';`;
