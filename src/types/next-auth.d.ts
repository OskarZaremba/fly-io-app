/* eslint-disable @typescript-eslint/no-unused-vars */
import type { User } from '@prisma/client';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
	interface Session {
		user: User;
	}
}

declare module 'next-auth/jwt' {
	interface JWT extends User {}
}
