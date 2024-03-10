import clsx from 'clsx';
import { forwardRef, useState, type InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { EyeIcon } from '../../../../public/assets/icons/EyeIcon';
import { EyeSlashIcon } from '../../../../public/assets/icons/EyeSlashIcon';
import { KeyIcon } from '../../../../public/assets/icons/KeyIcon';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const FormInput = forwardRef<HTMLInputElement, IProps>(
	({ className, type, ...props }, ref) => {
		const [isMasked, setIsMasked] = useState(type === 'password');
		const inputType = type === 'password' && isMasked ? type : 'text';
		const toggleMask = () => setIsMasked(!isMasked);

		return (
			<div className="relative">
				{type === 'password' && (
					<KeyIcon
						className="pointer-events-none absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2"
						title="key icon"
					/>
				)}
				<input
					className={twMerge(
						'block w-full rounded-md border border-gray-300 py-[9px] text-sm outline-2 placeholder:text-gray-500',
						clsx({ 'pl-6': type === 'password', 'pl-1': type !== 'password' }),
						className,
					)}
					ref={ref}
					type={inputType}
					{...props}
				/>
				{type === 'password' &&
					(isMasked ? (
						<EyeSlashIcon
							className="absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 cursor-pointer"
							onClick={toggleMask}
							title="slashed eye icon"
						/>
					) : (
						<EyeIcon
							className="absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 cursor-pointer"
							onClick={toggleMask}
							title="eye icon"
						/>
					))}
			</div>
		);
	},
);
