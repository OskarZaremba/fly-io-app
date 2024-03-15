import { PrismaAdapter } from '@auth/prisma-adapter';
import type { NextAuthConfig } from 'next-auth';
import Credentails from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

import { authorized, jwt, session } from '@/server/authentication/callbacks';
import { authorize } from '@/server/authentication/providers/credentials';
import { profile } from '@/server/authentication/providers/google';
import prisma from '@/services/prisma';

export const configuration: NextAuthConfig = {
	adapter: PrismaAdapter(prisma),
	callbacks: { authorized, jwt, session },
	pages: { signIn: '/auth/signin' },
	providers: [
		Credentails({ authorize }),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			profile,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: { strategy: 'jwt' },
	trustHost: true,
};
