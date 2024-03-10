import { Inter } from 'next/font/google';
import type { FC, ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface IProps {
	children: ReactNode;
}

export const Root: FC<IProps> = ({ children }) => {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
};
