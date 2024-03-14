import type { GoogleProfile } from 'next-auth/providers/google';

export function profile(profile: GoogleProfile) {
	return {
		id: profile.sub,
		email: profile.email,
		image: profile.picture,
		name: `${profile.given_name} ${profile.family_name}`,
		role: 'user',
	};
}
