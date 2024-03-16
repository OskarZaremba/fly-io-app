import type { FC, ReactNode } from 'react';

import { AuthSessionProvider } from '@/providers/AuthSessionProvider';
import { auth } from '@/services/authentication';

interface IProps {
	children: ReactNode;
}

export const Providers: FC<IProps> = async ({ children }) => {
	const session = await auth();

	return <AuthSessionProvider session={session}>{children}</AuthSessionProvider>;
};
