import { render, screen } from '@testing-library/react';

import { Root } from './Root';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<Root>Root Layout Content</Root>);

describe('Root - Layout', () => {
	it('should render the layout', () => {
		renderComponent();

		expect(screen.getByText('Root Layout Content')).toBeInTheDocument();
	});
});
