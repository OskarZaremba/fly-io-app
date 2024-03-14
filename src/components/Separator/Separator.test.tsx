import { render, screen } from '@testing-library/react';

import { Separator } from './Separator';

interface IProps {}

const renderComponent = ({}: IProps = {}) => render(<Separator />);

describe('Separator - Component', () => {
	it('should render the component', () => {
		renderComponent();

		expect(screen.getByText('Hello 👋, I am a Separator component')).toBeInTheDocument();
	});
});
