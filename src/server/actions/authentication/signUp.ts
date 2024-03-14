'use server';

import { Prisma } from '@prisma/client';
import bcrypt from 'bcryptjs';
import type { z } from 'zod';

import { signUpSchemaBase } from '@/constants/schemas';
import prisma from '@/services/prisma';

const signUpSchema = signUpSchemaBase.omit({ confirmPassword: true });

type SignUpArgs = z.infer<typeof signUpSchema>;

export const signUp = async (data: SignUpArgs) => {
	const parsedSchema = signUpSchema.safeParse({ email: data.email, password: data.password });

	if (!parsedSchema.success) {
		throw new Error('Invalid Inputs Error: Failed to Create User.'); // nie rzucaj błędów bo jest problem tylko zwróć jakiś {message:'info o błędzie'}
	}

	const { email, password: notHashedPassword } = parsedSchema.data;
	const password = await bcrypt.hash(notHashedPassword, 10);

	try {
		await prisma.user.create({ data: { email, password } });
	} catch (error) {
		// error from catch send to some errors gathering service
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === 'P2002') {
				throw new Error('Database Error: Email already exists.'); // nie rzucaj błędów bo jest problem tylko zwróć jakiś {message:'info o błędzie'}
			}
		}

		throw new Error('Database Error: Failed to Create User.'); // nie rzucaj błędów bo jest problem tylko zwróć jakiś {message:'info o błędzie'}
	}
};
