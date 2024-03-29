import type { Session } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

interface Args {
	session: Session;
	token: JWT;
}

export const session = ({ session, token }: Args) => {
	session.user.role = token.role;

	return session;
};
