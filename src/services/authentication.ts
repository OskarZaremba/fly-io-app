import NextAuth from 'next-auth';

import { configuration } from '@/configs/authentication';

export const {
	handlers: { GET, POST },
	auth,
} = NextAuth(configuration);
