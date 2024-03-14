import type { FC } from 'react';

import { Form } from './Form';

interface IProps {}

export const SignIn: FC<IProps> = () => {
	return (
		<main>
			<h1>Hello 👋, I am a SignIn view</h1>
			<Form />
		</main>
	);
};
