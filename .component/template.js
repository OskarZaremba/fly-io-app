exports.component = name => `import type { FC } from 'react';

interface Props {}

export const ${name}: FC<Props> = () => {
	return <div>Hello 👋, I am a ${name} component</div>;
};
`;

exports.index = name => `export { ${name} } from './${name}';`;
