'use client';

import type { FC } from 'react';
import { useForm } from 'react-hook-form';

import { FormField } from '@/components/FormField';

interface SignUpFormInputs {
	password: string;
}

export const SignUpForm: FC = () => {
	const { control, handleSubmit } = useForm<SignUpFormInputs>({
		defaultValues: { password: '' },
		mode: 'onTouched',
	});
	const onSubmit = (data: SignUpFormInputs) => console.warn(data);

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormField control={control} name="password" type="password" />
				<input type="submit" value="Send" />
			</form>
		</div>
	);
};
