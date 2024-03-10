import { render, screen } from '@testing-library/react';

import { SignUpForm } from './SignUpForm';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<SignUpForm />);

describe('SignUpForm - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a SignUpForm component')).toBeInTheDocument();
	});
});
