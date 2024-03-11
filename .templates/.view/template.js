exports.index = name => `export { ${name} } from './${name}';`;
exports.tests = name => `import { render, screen } from '@testing-library/react';

import { ${name} } from './${name}';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<${name} />);

describe('${name} - View', () => {
	it('should render the view', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a ${name} view')).toBeInTheDocument();
	});
});`;
exports.view = name => `import type { FC } from 'react';

interface IProps {}

export const ${name}: FC<IProps> = () => {
	return <main>Hello 👋, I am a ${name} view</main>;
};`;
