import { render, screen } from '@testing-library/react';

import { Home } from './Home';

interface Props {}

const renderComponent = ({}: Props = {}) => render(<Home />);

describe('Home - View', () => {
	it('should render the view', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am your home page😀')).toBeInTheDocument();
	});
});
