import type { FC, ReactNode } from 'react';

import { AuthSessionProvider } from '@/providers/AuthSessionProvider';

interface IProps {
	children: ReactNode;
}

export const Providers: FC<IProps> = ({ children }) => (
	<AuthSessionProvider>{children}</AuthSessionProvider>
);
