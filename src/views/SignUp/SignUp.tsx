import type { FC } from 'react';

import { Form } from '@/views/SignUp/Form';

interface IProps {}

export const SignUp: FC<IProps> = () => {
	return (
		<main>
			<h1>Hello 👋, I am a SignUp view</h1>
			<Form />
		</main>
	);
};
