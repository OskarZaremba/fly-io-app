import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import type { NextAuthConfig } from 'next-auth';
import Credentails from 'next-auth/providers/credentials';
import type { GoogleProfile } from 'next-auth/providers/google';
import Google from 'next-auth/providers/google';

import { PROTECTED_ROUTES } from '@/constants/routes';
import { signInSchema } from '@/constants/schemas';
import { getUserByEmail } from '@/server/actions/user';
import prisma from '@/services/prisma';

export const configuration: NextAuthConfig = {
	adapter: PrismaAdapter(prisma),
	callbacks: {
		authorized({ auth, request }) {
			const isUserSignedIn = !!auth?.user;
			const requestPathName = request.nextUrl.pathname;

			if (isUserSignedIn) {
				const callbackUrl = request.nextUrl.searchParams.get('callbackUrl');
				const homeUrl = new URL('/dashboard', request.url);

				if (callbackUrl) return Response.redirect(callbackUrl);
				if (requestPathName.startsWith('/auth')) return Response.redirect(homeUrl);

				return true;
			}

			const isProtectedRoute = PROTECTED_ROUTES.some(protectedRoute =>
				requestPathName.startsWith(protectedRoute),
			);

			if (isProtectedRoute) return false;

			return true;
		},
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token }) {
			session.user.role = token.role;

			return session;
		},
	},
	pages: { signIn: '/auth/signin' },
	providers: [
		Credentails({
			async authorize(credentials) {
				const parsedSchema = signInSchema.safeParse(credentials);

				if (!parsedSchema.success) return null;

				const { email, password } = parsedSchema.data;
				const user = await getUserByEmail(email);

				if (!user) return null;

				const isPasswordValid = await bcrypt.compare(password, user.password || '');

				if (!isPasswordValid) return null;

				return user;
			},
		}),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			profile(profile: GoogleProfile) {
				return {
					id: profile.sub,
					email: profile.email,
					image: profile.picture,
					name: `${profile.given_name} ${profile.family_name}`,
					role: 'user',
				};
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: { strategy: 'jwt' },
};
