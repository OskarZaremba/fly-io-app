import type { NextRequest } from 'next/server';
import type { Session } from 'next-auth';

import { PROTECTED_ROUTES } from '@/constants/routes';

interface Args {
	auth: Session | null;
	request: NextRequest;
}

export function authorized({ auth, request }: Args) {
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
}
