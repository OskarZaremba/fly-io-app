'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import type { FC } from 'react';

export const MainNavigation: FC = () => {
	const { data: session } = useSession();

	const handleSignOutClick = async () => {
		signOut({ callbackUrl: '/' });
	};

	return (
		<header className="sticky top-0 w-full bg-white shadow">
			<nav className="flex justify-between px-8 py-4 text-black">
				<div></div>
				<div className="space-x-4">
					{!session ? (
						<>
							<Link href="/auth/signin">Sign In</Link>
							<Link href="/auth/signup">Sign Up</Link>
						</>
					) : (
						<button onClick={handleSignOutClick}>Sign Out</button>
					)}
				</div>
			</nav>
		</header>
	);
};
