import { type HTMLInputTypeAttribute } from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

import { FormInput } from './FormInput';

type Props<T extends FieldValues> = UseControllerProps<T> & {
	isMandatory?: boolean;
	label?: string;
	placeholder?: string;
	type?: HTMLInputTypeAttribute;
};

export const FormField = <T extends FieldValues>({
	control,
	name,
	type = 'text',
	placeholder,
}: Props<T>) => {
	const { field } = useController({ control, name });

	return (
		<div>
			<FormInput placeholder={placeholder} type={type} {...field} />
		</div>
	);
};
