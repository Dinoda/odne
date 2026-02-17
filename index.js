import 'dotenv/config';

import './src/rendering/index.js';

import { join } from 'node:path';

import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

esbuild.build({
	entryPoints: ['./src/app/app.js'],
	bundle: true,
	outfile: join(process.env.PUBLIC_DIRECTORY, 'app.js'),
	plugins: [sassPlugin()],
	external: [
		'img/*',
	],
});


