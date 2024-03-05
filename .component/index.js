const fs = require('fs');
const { component, index } = require('./template.js');

// Grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/components/${name}/`;

// Throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.');

// Create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
	if (err) throw err;
}

// Component.tsx
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
// index.ts
fs.writeFile(`${dir}/index.ts`, index(name), writeFileErrorHandler);
