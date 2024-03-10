import type { FC } from 'react';

import { SignUpForm } from '@/views/SignUp/SignUpForm';

interface IProps {}

export const SignUp: FC<IProps> = () => {
	return (
		<main>
			<h1>Hello 👋, I am a SignUp view</h1>
			<SignUpForm />
		</main>
	);
};
