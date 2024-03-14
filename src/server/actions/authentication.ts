'use server';

import { Prisma } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { AuthError } from 'next-auth';
import type { z } from 'zod';

import { signInSchema } from '@/constants/schemas';
import { signUpSchemaBase } from '@/constants/schemas';
import { signIn } from '@/services/authentication';
import prisma from '@/services/prisma';

const signUpSchema = signUpSchemaBase.omit({ confirmPassword: true });

type SignUpArgs = z.infer<typeof signUpSchema>;

export const signUp = async (data: SignUpArgs) => {
	const parsedSchema = signUpSchema.safeParse({ email: data.email, password: data.password });

	if (!parsedSchema.success) {
		throw new Error('Invalid Inputs Error: Failed to Create User.');
	}

	const { email, password: notHashedPassword } = parsedSchema.data;
	const password = await bcrypt.hash(notHashedPassword, 10);

	try {
		await prisma.user.create({ data: { email, password } });
	} catch (error) {
		// error from catch send to some errors gathering service
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === 'P2002') {
				throw new Error('Database Error: Email already exists.');
			}
		}

		throw new Error('Database Error: Failed to Create User.');
	}
};

type LoginArgs = z.infer<typeof signInSchema>;

export const login = async (data: LoginArgs) => {
	const parsedSchema = signInSchema.safeParse(data);

	if (!parsedSchema.success) {
		throw new Error('Invalid Inputs Error: Failed to Sign In User.');
	}

	try {
		await signIn('credentials', data);
	} catch (error) {
		if (error instanceof AuthError) {
			if (error.type === 'CredentialsSignin') throw new Error('Invalid credentials.');
		}

		throw error;
	}
};
