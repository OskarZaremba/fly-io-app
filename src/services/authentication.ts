import NextAuth from 'next-auth';

import { configuration } from '@/configs/authentication';

const nextAuth = NextAuth(configuration);
const { GET, POST } = nextAuth.handlers;
const { auth, signIn, signOut } = nextAuth;

export { auth, GET, POST, signIn, signOut };
