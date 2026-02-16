import { PUBLIC_DIRECTORY, HTML_SOURCE_DIRECTORY } from '../const.js';

import manager from './manager.js';
import initialization from './initialization.js';
import createPages from './pages.js';
import files from './files.js';

await manager.loadFromDirectory(HTML_SOURCE_DIRECTORY);

await initialization();

const formatter = process.env.ENV == 'dev' 
	? (await import('htmlfy')).prettify 
	: a => a;

console.log(manager.pages);
await createPages(manager, files, formatter);
