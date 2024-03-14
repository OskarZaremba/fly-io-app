import { render, screen } from '@testing-library/react';

import { Form } from './Form';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<Form />);

describe('SignUpForm - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a SignUpForm component')).toBeInTheDocument();
	});
});
