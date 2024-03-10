import { render, screen } from '@testing-library/react';

import { FormField } from './FormField';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<FormField name="test-field" />);

describe('FormField - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a FormField component')).toBeInTheDocument();
	});
});
