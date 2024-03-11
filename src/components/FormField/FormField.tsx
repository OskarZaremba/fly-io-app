import { type HTMLInputTypeAttribute } from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { FormErrorMessage } from '@/components/FormField/FormErrorMessage';
import { FormLabel } from '@/components/FormLabel';

import { FormInput } from './FormInput';

type Props<T extends FieldValues> = UseControllerProps<T> & {
	className?: string;
	isMandatory?: boolean;
	label?: string;
	placeholder?: string;
	type?: HTMLInputTypeAttribute;
};

export const FormField = <T extends FieldValues>({
	className,
	control,
	isMandatory,
	label,
	name,
	placeholder,
	type = 'text',
}: Props<T>) => {
	const { field, fieldState } = useController({ control, name });
	const { error, isDirty } = fieldState;
	const showError = isDirty && !!error;

	return (
		<div className={twMerge('', className)}>
			{label && <FormLabel htmlFor={name} isMandatory={isMandatory} label={label} />}
			<FormInput id={name} placeholder={placeholder} type={type} {...field} />
			{showError && <FormErrorMessage error={error} />}
		</div>
	);
};
