import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { PROTECTED_ROUTES } from '@/constants/routes';

export const handleGuestUser = (req: NextRequest) => {
	const isProtectedRoute = PROTECTED_ROUTES.some(route => req.nextUrl.pathname.startsWith(route));

	if (!isProtectedRoute) return NextResponse.next();

	const signInUrl = new URL(`/auth/signin`, req.nextUrl.origin);

	signInUrl.searchParams.set('callbackUrl', `${req.nextUrl.origin}${req.nextUrl.pathname}`);

	return NextResponse.redirect(signInUrl);
};
