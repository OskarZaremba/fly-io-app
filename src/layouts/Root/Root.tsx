import { Fragment, type FC, type ReactNode } from 'react';

import { MainNavigation } from '@/layouts/Root/MainNavigation';

interface IProps {
	children: ReactNode;
}

export const Root: FC<IProps> = ({ children }) => {
	return (
		<>
			<MainNavigation />
			{children}
		</>
	);
};
