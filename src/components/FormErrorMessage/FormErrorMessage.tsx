import type { FC } from 'react';
import type { FieldError } from 'react-hook-form';

interface IProps {
	error: Partial<FieldError>;
}

export const FormErrorMessage: FC<IProps> = ({ error }) => {
	return (
		<p aria-live="polite" aria-atomic="true">
			{error.message}
		</p>
	);
};
