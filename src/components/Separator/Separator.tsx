import type { FC } from 'react';

import { mcn } from '@/utils/classNames';

interface IProps {
	className?: string;
	label?: string;
	orientation?: 'horizontal' | 'vertical';
}

export const Separator: FC<IProps> = ({ className, label, orientation = 'horizontal' }) => {
	const isHorizontal = orientation === 'horizontal';
	const hasLabel = !!label;
	const containerStyle = mcn(
		'flex items-center justify-center',
		!isHorizontal && 'flex-col',
		className,
	);
	const lineStyle = mcn('bg-slate-600', isHorizontal ? 'h-px w-full' : 'h-full w-px');
	const labelStyle = mcn(isHorizontal ? 'mx-2' : 'my-2');

	return (
		<div className={containerStyle}>
			{hasLabel && (
				<>
					<div className={lineStyle} />
					<span className={labelStyle}>{label}</span>
					<div className={lineStyle} />
				</>
			)}
			{!hasLabel && <div className={lineStyle} />}
		</div>
	);
};
