import type { User } from 'next-auth';
import type { AdapterUser } from 'next-auth/adapters';
import type { JWT } from 'next-auth/jwt';

interface Args {
	token: JWT;
	user: User | AdapterUser;
}

export const jwt = ({ token, user }: Args) => {
	return { ...token, ...user };
};
