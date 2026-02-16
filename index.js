import 'dotenv/config';

import './src/rendering/index.js';
/*
import fs from 'node:fs/promises';
import { join } from 'node:path';

import { prettify } from 'htmlfy';

import manager from './src/rendering/manager.js';


const PUBLIC_DIR = './public/';

await manager.loadFromDirectory('./src/html');

const files = {
	index: {
		filename: 'index.html',
		data: {
			title: "Comment obtenir des Catalyseurs OP-1",
			block: {
				lines: [
					"Vous pouvez voir combien vous en avez dans votre inventaire (par défaut \"i\"), dans l'onglet \"Récompenses\".",
					"L'inventaire est également disponible dans la partie droite de votre équipement (par défaut \"c\").",
				],
				image: {
					url: 'catalyseurs_op_1.png',
					alt: 'Test alt',
				},
			}
		},
	},
};

const initPublic = () => {
	return new Promise((res) => {
		fs.access(PUBLIC_DIR).then(() => {
			res();
		}).catch(() => {
			fs.mkdir(PUBLIC_DIR).then(() => {
				res();
			}).catch(() => {
				console.error('Failed to create public directory');
				process.exit(-1);
			});
		});
	});

};

const createPages = async () => {
	for (const [page, { filename, data }] of Object.entries(files)) {
		manager.buildPage(page, data);

		await fs.writeFile(join(PUBLIC_DIR, filename), prettify(manager.getPageHTML(page)));
	}
};

await initPublic();
await createPages();



*/
