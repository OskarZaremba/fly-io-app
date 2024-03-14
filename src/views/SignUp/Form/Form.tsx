'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useEffect, type FC } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { FormErrorMessage } from '@/components/FormErrorMessage';
import { FormField } from '@/components/FormField';
import { Separator } from '@/components/Separator';
import { signUpSchema } from '@/constants/schemas';
import { signUp } from '@/server/actions/authentication';

type FormInput = z.infer<typeof signUpSchema>;

export const Form: FC = () => {
	const { control, formState, handleSubmit, reset, setError } = useForm<FormInput>({
		defaultValues: { email: '', password: '', confirmPassword: '' },
		mode: 'onTouched',
		resolver: zodResolver(signUpSchema),
	});
	const { errors, isSubmitting, isSubmitSuccessful } = formState;
	const formErrorMessage = errors.root?.message;

	useEffect(() => {
		reset();
	}, [isSubmitSuccessful, reset]);

	const submitForm = async (data: FormInput) => {
		try {
			await signUp(data);
		} catch (error) {
			if (error instanceof Error) {
				setError('root', { message: error.message });
			}
		}
	};

	const handleGoogleSignUpClick = () => {
		signIn('google');
	};

	return (
		<div className="mx-auto w-80 rounded-md border px-4 py-8">
			<button onClick={handleGoogleSignUpClick}>Sign Up with Google</button>
			<Separator className="my-4" label="OR" />
			<form className="space-y-2" onSubmit={handleSubmit(submitForm)}>
				<FormField control={control} isMandatory label="Email" name="email" type="email" />
				<FormField control={control} isMandatory label="Password" name="password" type="password" />
				<FormField
					control={control}
					isMandatory
					label="Confirm Password"
					name="confirmPassword"
					type="password"
				/>
				{formErrorMessage && <FormErrorMessage error={{ message: formErrorMessage }} />}
				<input className="inline-block" disabled={isSubmitting} type="submit" value="Sign Up" />
			</form>
		</div>
	);
};
