import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { HOME_ROUTE } from '@/constants/routes';

export const handleSignedInUser = (req: NextRequest) => {
	const callbackURL = req.nextUrl.searchParams.get('callbackUrl');
	const homeURL = `${req.nextUrl.origin}${HOME_ROUTE}`;

	if (callbackURL) return NextResponse.redirect(callbackURL);
	if (req.nextUrl.pathname.startsWith('/auth')) return NextResponse.redirect(homeURL);

	return NextResponse.next();
};
