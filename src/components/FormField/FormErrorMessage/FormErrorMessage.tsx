import type { FC } from 'react';
import type { FieldError } from 'react-hook-form';

interface IProps {
	error: FieldError;
}

export const FormErrorMessage: FC<IProps> = ({ error }) => {
	return (
		<p aria-live="polite" aria-atomic="true">
			{error.message}
		</p>
	);
};
