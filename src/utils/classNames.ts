import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines and optimizes class names for Tailwind CSS. This function leverages `clsx` for
 * conditional class name construction and `twMerge` for resolving conflicts specific to Tailwind CSS,
 * making it ideal for dynamic class name generation in React components.
 *
 * @param inputs - Class names in various formats (strings, objects, arrays).
 * @returns Optimized class name string for Tailwind CSS.
 */
export const mcn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};
