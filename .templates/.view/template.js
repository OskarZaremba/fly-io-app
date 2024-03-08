exports.test = name => `import { render, screen } from '@testing-library/react';

import { ${name} } from './${name}';

interface Props {}

const renderComponent = ({}: Props = {}) => render(<${name} />);

describe('${name} - View', () => {
	it('should render the view', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a ${name} view')).toBeInTheDocument();
	});
});`;
exports.view = name => `import type { FC } from 'react';

interface Props {}

export const ${name}: FC<Props> = () => {
	return <main>Hello 👋, I am a ${name} view</main>;
};`;
exports.index = name => `export { ${name} } from './${name}';`;
