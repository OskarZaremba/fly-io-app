import { render, screen } from '@testing-library/react';

import { FormInput } from './FormInput';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<FormInput />);

describe('FormInput - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a FormInput component')).toBeInTheDocument();
	});
});
