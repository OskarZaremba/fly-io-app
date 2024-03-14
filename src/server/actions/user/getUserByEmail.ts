'use server';

import prisma from '@/services/prisma';

export const getUserByEmail = async (email: string) => {
	try {
		const user = await prisma.user.findFirst({ where: { email } });

		return user;
	} catch (error) {
		console.error('### co masz w error: ', error);
	}
};
