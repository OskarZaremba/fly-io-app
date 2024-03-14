import type { FC, LabelHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {
	className?: string;
	isMandatory: boolean | undefined;
	label: string;
}

export const FormLabel: FC<IProps> = ({ className, isMandatory, label, ...props }) => (
	<label className={twMerge('inline-block cursor-pointer', className)} {...props}>
		{`${!!isMandatory ? '*' : ''}${label}`}
	</label>
);
