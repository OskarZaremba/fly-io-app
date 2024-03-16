'use server';

import { AuthError } from 'next-auth';
import type { z } from 'zod';

import { signInSchema } from '@/constants/schemas';
import { signIn } from '@/services/authentication';

type LoginArgs = z.infer<typeof signInSchema>;

export const login = async (data: LoginArgs) => {
	const parsedSchema = signInSchema.safeParse(data);

	if (!parsedSchema.success) {
		throw new Error('Invalid Inputs Error: Failed to Sign In User.'); // nie rzucaj błędów bo jest problem tylko zwróć jakiś {message:'info o błędzie'}
	}

	try {
		await signIn('credentials', data);
	} catch (error) {
		if (error instanceof AuthError) {
			if (error.type === 'CredentialsSignin') throw new Error('Invalid credentials.'); // nie rzucaj błędów bo jest problem tylko zwróć jakiś {message:'info o błędzie'}
		}

		throw error;
	}
};
