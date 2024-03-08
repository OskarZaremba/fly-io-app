import { render, screen } from '@testing-library/react';

import { Test } from '@/components/Test';

interface Props {}

const renderComponent = ({}: Props = {}) => render(<Test />);

describe('Test - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a Test component')).toBeInTheDocument();
	});
});
