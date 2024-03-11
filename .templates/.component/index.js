const fs = require('fs');
const { component, index, stories, tests } = require('./template.js');

const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/components/${name}/`;

if (fs.existsSync(dir)) throw new Error('A component with that name already exists.');

fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
	if (err) throw err;
}

fs.writeFile(`${dir}/${name}.stories.tsx`, stories(name), writeFileErrorHandler);
fs.writeFile(`${dir}/${name}.test.tsx`, tests(name), writeFileErrorHandler);
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
fs.writeFile(`${dir}/index.ts`, index(name), writeFileErrorHandler);
