import { render, screen } from '@testing-library/react';

import { SignUp } from './SignUp';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<SignUp />);

describe('SignUp - View', () => {
	it('should render the view', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a SignUp view')).toBeInTheDocument();
	});
});
