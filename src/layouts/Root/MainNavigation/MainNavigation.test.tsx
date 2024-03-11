import { render, screen } from '@testing-library/react';

import { MainNavigation } from './MainNavigation';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<MainNavigation />);

describe('MainNavigation - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a MainNavigation component')).toBeInTheDocument();
	});
});
