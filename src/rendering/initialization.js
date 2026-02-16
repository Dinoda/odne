import { access, mkdir } from 'node:fs/promises';

import { PUBLIC_DIRECTORY } from '../const.js';

export function createDirectory(directory) {
	return new Promise((res, rej) => {
		access(directory).then(() => {
			res();
		}).catch(() => {
			mkdir(directory).then(() => {
				res();
			}).catch(() => {
				rej(`Couldn't create directory "${directory}"`);
			});
		});
	});
}

export default function () {
	return createDirectory(PUBLIC_DIRECTORY);
};

