import bcrypt from 'bcryptjs';

import { signInSchema } from '@/constants/schemas';
import { getUserByEmail } from '@/server/actions/user';

export async function authorize(credentials: Record<string, unknown>) {
	const parsedSchema = signInSchema.safeParse(credentials);

	if (!parsedSchema.success) return null;

	const { email, password } = parsedSchema.data;
	const user = await getUserByEmail(email);

	if (!user) return null;

	const isPasswordValid = await bcrypt.compare(password, user.password || '');

	if (!isPasswordValid) return null;

	return user;
}
