import { z } from 'zod';

export const schema = z
	.object({
		email: z
			.string({ required_error: 'Email is required' })
			.email('Please enter a valid email address'),
		password: z
			.string({ required_error: 'Password is required' })
			.min(6, 'Password must have at least 6 characters')
			.max(20, 'Password must be up to 20 characters'),
		confirmPassword: z
			.string({ required_error: 'Confirm your password is required' })
			.min(6, 'Password must have at least 6 characters')
			.max(20, 'Password must be up to 20 characters'),
	})
	.refine(values => values.password === values.confirmPassword, {
		message: "Password and Confirm Password doesn't match!",
		path: ['confirmPassword'],
	});
