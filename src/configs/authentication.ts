import { PrismaAdapter } from '@auth/prisma-adapter';
import type { AuthOptions } from 'next-auth';
import type { Adapter } from 'next-auth/adapters';
import Credentails from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

import { jwt, session } from '@/server/authentication/callbacks';
import { authorize } from '@/server/authentication/providers/credentials';
import { profile } from '@/server/authentication/providers/google';
import prisma from '@/services/prisma';

export const configuration: AuthOptions = {
	adapter: PrismaAdapter(prisma) as Adapter,
	callbacks: { jwt, session },
	providers: [
		Credentails({
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			authorize,
		}),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			profile,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: { strategy: 'jwt' },
};
