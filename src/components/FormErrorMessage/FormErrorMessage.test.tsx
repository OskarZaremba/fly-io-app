import { render, screen } from '@testing-library/react';

import { FormErrorMessage } from './FormErrorMessage';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<FormErrorMessage />);

describe('FormErrorMessage - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a FormErrorMessage component')).toBeInTheDocument();
	});
});
