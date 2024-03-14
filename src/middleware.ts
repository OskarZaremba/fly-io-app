export { auth as middleware } from '@/services/authentication';

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
