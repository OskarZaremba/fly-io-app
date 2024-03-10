import { render, screen } from '@testing-library/react';

import { FormLabel } from './FormLabel';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<FormLabel />);

describe('FormLabel - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a FormLabel component')).toBeInTheDocument();
	});
});
