import { render, screen } from '@testing-library/react';

import { SignIn } from './SignIn';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<SignIn />);

describe('SignIn - View', () => {
	it('should render the view', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a SignIn view')).toBeInTheDocument();
	});
});
