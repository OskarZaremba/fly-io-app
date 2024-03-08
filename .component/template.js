exports.test = name => `import { render, screen } from '@testing-library/react';

import { ${name} } from '@/components/${name}';

interface Props {}

const renderComponent = ({}: Props = {}) => render(<${name} />);

describe('${name} - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a ${name} component')).toBeInTheDocument();
	});
});`;
exports.component = name => `import type { FC } from 'react';

interface Props {}

export const ${name}: FC<Props> = () => {
	return <div>Hello 👋, I am a ${name} component</div>;
};
`;
exports.index = name => `export { ${name} } from './${name}';`;
