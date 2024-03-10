'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import type { FC } from 'react';

interface Props {}

export const Home: FC<Props> = () => {
	const { data: session } = useSession();

	return (
		<main>
			<h1>Hello 👋, I am your home page😀</h1>
			{!!session ? (
				<button onClick={() => signOut()}>Sign Out</button>
			) : (
				<button onClick={() => signIn('google')} type="button">
					Sign In with Google
				</button>
			)}
		</main>
	);
};
