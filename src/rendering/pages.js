import { writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';

import { PUBLIC_DIRECTORY } from '../const.js';

import { createDirectory } from './initialization.js';

export default async function createPages(manager, files, HTMLFormatter) {
	for (const [page, { filename, data }] of Object.entries(files)) {
		manager.buildPage(page, data);

		const filepath = join(PUBLIC_DIRECTORY, filename);

		await createDirectory(dirname(filepath));

		await writeFile(
			join(
				PUBLIC_DIRECTORY, 
				filename
			), 
			HTMLFormatter(manager.getPageHTML(page)));
	}
}
