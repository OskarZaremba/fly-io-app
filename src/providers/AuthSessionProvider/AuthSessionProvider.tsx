'use client';

import { SessionProvider } from 'next-auth/react';
import type { FC, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

export const AuthSessionProvider: FC<IProps> = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};
