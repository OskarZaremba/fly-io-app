'use client';

import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { FC, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	session: Session | null;
}

export const AuthSessionProvider: FC<IProps> = ({ children, session }) => {
	return <SessionProvider session={session}>{children}</SessionProvider>;
};
