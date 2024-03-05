import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });
const config: Config = {
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}',
		'!<rootDir>/src/**/*.d.ts',
		'!<rootDir>/src/**/*.md',
	],
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	coverageReporters: ['lcovonly'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testEnvironment: 'jsdom',
};

export default createJestConfig(config);
