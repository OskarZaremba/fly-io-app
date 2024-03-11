const fs = require('fs');
const { index, tests, view } = require('./template.js');

const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a view name.');

const dir = `./src/views/${name}/`;

if (fs.existsSync(dir)) throw new Error('A view with that name already exists.');

fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
	if (err) throw err;
}

fs.writeFile(`${dir}/${name}.test.tsx`, tests(name), writeFileErrorHandler);
fs.writeFile(`${dir}/${name}.tsx`, view(name), writeFileErrorHandler);
fs.writeFile(`${dir}/index.ts`, index(name), writeFileErrorHandler);
