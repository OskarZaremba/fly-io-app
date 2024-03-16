import { type NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { handleGuestUser } from '@/server/middleware/authentication/helpers/handleGuestUser';
import { handleSignedInUser } from '@/server/middleware/authentication/helpers/handleSignedInUser';

export const middleware = async (req: NextRequest) => {
	const isUserSignedIn = Boolean(await getToken({ req }));

	return isUserSignedIn ? handleSignedInUser(req) : handleGuestUser(req);
};
