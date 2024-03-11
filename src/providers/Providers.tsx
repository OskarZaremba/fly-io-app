import { getServerSession } from 'next-auth';
import type { FC, ReactNode } from 'react';

import { AuthSessionProvider } from '@/providers/AuthSessionProvider';

interface IProps {
	children: ReactNode;
}

export const Providers: FC<IProps> = async ({ children }) => {
	const session = await getServerSession();

	return <AuthSessionProvider session={session}>{children}</AuthSessionProvider>;
};
