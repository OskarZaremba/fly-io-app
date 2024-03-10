import type { SVGProps } from 'react';

export interface IIcon extends SVGProps<SVGSVGElement> {
	className?: string;
	fill?: string;
	stroke?: string;
	title: string;
}
