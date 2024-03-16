import NextAuth from 'next-auth/next';

import { configuration } from '@/configs/authentication';

const handler = NextAuth(configuration);

export { handler as GET, handler as POST };
