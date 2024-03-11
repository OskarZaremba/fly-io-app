import type { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const configuration: AuthOptions = {
	pages: { signIn: '/auth/signin' },
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
};
