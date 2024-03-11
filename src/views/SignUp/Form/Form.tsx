'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { FormField } from '@/components/FormField';
import { schema } from '@/views/SignUp/Form/schema';

type FormInput = z.infer<typeof schema>;

export const Form: FC = () => {
	const { control, handleSubmit } = useForm<FormInput>({
		defaultValues: { email: '', password: '', confirmPassword: '' },
		mode: 'onTouched',
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: FormInput) => {
		console.warn(data);
	};

	return (
		<form
			className="mx-auto w-80 space-y-2 rounded-md border px-4 py-8"
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormField control={control} isMandatory label="Email" name="email" type="email" />
			<FormField control={control} isMandatory label="Password" name="password" type="password" />
			<FormField
				control={control}
				isMandatory
				label="Confirm Password"
				name="confirmPassword"
				type="password"
			/>
			<input className="inline-block" type="submit" value="Send" />
		</form>
	);
};
